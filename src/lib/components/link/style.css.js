const { StyleSheet } = require('../../css')

const styleSheet = StyleSheet.create({
  inline: {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0
  },
  externalIcon: {
    width: '0.75em',
    height: '0.75em',
    position: 'relative',
    bottom: '0.5rem',
    marginLeft: '0.25rem'
  }
})

module.exports = styleSheet
