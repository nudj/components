const orderBy = require('lodash/orderBy')

const patterns = orderBy(
  [
    {
      path: '/patterns/table',
      title: 'Table',
      content: require('./table')
    },
    {
      path: '/patterns/checkbox',
      title: 'Checkbox',
      content: require('./checkbox')
    }
    {
      path: '/patterns/primitives',
      title: 'Primitives',
      content: require('./primitives')
    }
  ],
  'title'
)

module.exports = patterns
