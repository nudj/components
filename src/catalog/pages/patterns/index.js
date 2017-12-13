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
    },
    {
      path: '/patterns/buttons',
      title: 'Buttons',
      content: require('./buttons')
    },
    {
      path: '/patterns/dropzone',
      title: 'Dropzone',
      content: require('./dropzone')
    },
    {
      path: '/patterns/loader',
      title: 'Loader',
      content: require('./loader')
    }
  ],
  'title'
)

module.exports = patterns
