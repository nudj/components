// @flow
const orderBy = require('lodash/orderBy')

const patterns = orderBy(
  [
    {
      path: '/components/table',
      title: 'Table',
      content: require('./table')
    },
    {
      path: '/components/primitives',
      title: 'Primitives',
      content: require('./primitives')
    },
    {
      path: '/components/forms',
      title: 'Forms',
      content: require('./forms')
    },
    {
      path: '/components/buttons',
      title: 'Buttons',
      content: require('./buttons')
    },
    {
      path: '/components/dropzone',
      title: 'Dropzone',
      content: require('./dropzone')
    },
    {
      path: '/components/loader',
      title: 'Loader',
      content: require('./loader')
    },
    {
      path: '/components/pills',
      title: 'Pills',
      content: require('./pills')
    },
    {
      path: '/components/cards',
      title: 'Cards',
      content: require('./cards')
    },
    {
      path: '/components/modals',
      title: 'Modals',
      content: require('./modals')
    },
    {
      path: '/components/data-visualisation',
      title: 'Data Visualisation',
      content: require('./data-visualisation')
    },
    {
      path: '/components/animation',
      title: 'Animation',
      content: require('./animation')
    },
    {
      path: '/components/accessibility',
      title: 'Accessibility',
      content: require('./accessibility')
    },
    {
      path: '/components/iconography',
      title: 'Iconography',
      content: require('./icons')
    },
    {
      path: '/components/video',
      title: 'Video',
      content: require('./video')
    }
  ],
  'title'
)

module.exports = patterns
