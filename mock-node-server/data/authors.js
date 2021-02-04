const faker = require('faker')
const range = require('lodash/range')

const authors = range(0, 3).map(i => ({
  id: i.toString(),
  name: faker.name.findName(),
}))

module.exports = authors
