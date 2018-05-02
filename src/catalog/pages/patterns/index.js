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
    },
    {
      path: '/patterns/pills',
      title: 'Pills',
      content: require('./pills')
    },
    {
      path: '/patterns/cards',
      title: 'Cards',
      content: require('./cards')
    },
    {
      path: '/patterns/modals',
      title: 'Modals',
      content: require('./modals')
    },
    {
      path: '/patterns/data-visualisation',
      title: 'Data Visualisation',
      content: require('./data-visualisation')
    },
    {
      path: '/patterns/animation',
      title: 'Animation',
      content: require('./animation')
    },
    {
      path: '/patterns/accessibility',
      title: 'Accessibility',
      content: require('./accessibility')
    }
  ],
  'title'
)

module.exports = patterns
