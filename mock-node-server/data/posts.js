const faker = require('faker')
const range = require('lodash/range')

const posts = range(0, 100).map(i => ({
  id: i.toString(),
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(5),
  author: faker.random.number({ min: 0, max: 2 }).toString(),
  created: faker.date.past(),
}))

module.exports = posts
