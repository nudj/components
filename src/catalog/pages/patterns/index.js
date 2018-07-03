// @flow
const orderBy = require('lodash/orderBy')

const patterns = orderBy(
  [
    {
      path: '/patterns/lists',
      title: 'Lists',
      content: require('./lists')
    }
  ],
  'title'
)

module.exports = patterns
