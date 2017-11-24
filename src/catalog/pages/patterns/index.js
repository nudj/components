// @flow
const orderBy = require('lodash/orderBy')

const patterns = orderBy(
  [
    {
      path: '/patterns/table',
      title: 'Table',
      content: require('./table')
    },
    {
      path: '/patterns/primitives',
      title: 'Primitives',
      content: require('./primitives')
    },
    {
      path: '/patterns/forms',
      title: 'Forms',
      content: require('./forms')
    }
  ],
  'title'
)

module.exports = patterns
