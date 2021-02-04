const chunk = require('lodash/chunk')
const cloneDeep = require('lodash/cloneDeep')
const find = require('lodash/find')
const filter = require('lodash/filter')
const last = require('lodash/last')
const pick = require('lodash/pick')
const remove = require('lodash/remove')
const express = require('express')
const { ApolloServer, gql, UserInputError } = require('apollo-server-express')

let data = require('./data')

const resetData = cloneDeep(data)

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  scalar Date

  type MutationSuccess {
    success: Boolean
  }

  type Author {
    id: ID
    name: String
    posts(page: Int!): [Post]
  }

  type Post {
    id: ID
    title: String
    content: String
    author: Author
    created: Date
  }

  type Query {
    authors(page: Int): [Author]
    author(id: ID!): Author
    posts(page: Int, author: ID): [Post]
    post(id: ID!): Post
  }

  type Mutation {
    createPost(title: String!, content: String!, author: ID!): Post
    editPost(id: ID!, title: String, content: String): Post
    deletePost(id: ID!): Post
    createAuthor(name: String!): Author
    editAuthor(id: ID!, name: String): Author
    deleteAuthor(id: ID!): Author
    reset: MutationSuccess
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    authors: (root, args, context, info) =>
      chunk(filter(data.authors, pick(args, [])), 10)[(args.page || 1) - 1],
    author: (root, args, context, info) => find(data.authors, { id: args.id }),
    posts: (root, args, context, info) =>
      chunk(filter(data.posts, pick(args, ['author'])), 10)[(args.page || 1) - 1],
    post: (root, args, context, info) => find(data.posts, { id: args.id }),
  },
  Author: {
    posts: (author, args) =>
      chunk(filter(data.posts, { author: author.id }), 10)[(args.page || 1) - 1],
  },
  Post: {
    author: post => find(data.authors, { id: post.author }),
  },
  Mutation: {
    createAuthor(root, args) {
      const id = (Number(last(data.authors).id) + 1).toString()
      const newAuthor = { ...args, id: id }
      data.authors.push(newAuthor)
      return newAuthor
    },
    editAuthor(root, args) {
      const author = find(data.authors, { id: args.id })
      Object.assign(author, args)
      return author
    },
    deleteAuthor(root, args) {
      const author = find(data.authors, { id: args.id })
      remove(data.authors, { id: args.id })
      return author
    },
    createPost(root, args) {
      const id = (Number(last(data.posts).id) + 1).toString()
      const newPost = { ...args, id: id }
      const author = find(data.authors, { id: args.author })
      if (!author) {
        throw new UserInputError('Author not found.')
      }
      data.posts.push(newPost)
      return newPost
    },
    editPost(root, args) {
      const post = find(data.posts, { id: args.id })
      const author = find(data.authors, { id: args.author })
      if (!author) {
        throw new UserInputError('Author not found.')
      }
      Object.assign(post, args)
      return post
    },
    deletePost(root, args) {
      const post = find(data.posts, { id: args.id })
      remove(data.posts, { id: args.id })
      return post
    },
    reset() {
      data = cloneDeep(resetData)
      return { success: true }
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 5000 }, () =>
  console.info(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
)
