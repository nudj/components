const { StyleSheet, sizes } = require('../../css')

const styleSheet = StyleSheet.create({
  root: {
    position: 'relative'
  },
  icon: {
    pointerEvents: 'none',
    position: 'absolute',
    top: '50%',
    transform: `translate(${sizes.regular}, -50%)`
  },
  input: {
    paddingLeft: sizes.largeIii
  }
})

module.exports = styleSheet
