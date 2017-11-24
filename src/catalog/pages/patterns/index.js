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
      path: '/patterns/checkbox',
      title: 'Checkbox',
      content: require('./checkbox')
    },
    {
      path: '/patterns/primitives',
      title: 'Primitives',
      content: require('./primitives')
    },
    {
      path: '/patterns/inputs',
      title: 'Inputs',
      content: require('./inputs')
    }
  ],
  'title'
)

module.exports = patterns
