const { StyleSheet, sizes } = require('../../css')

const styleSheet = StyleSheet.create({
  root: {
    position: 'relative'
  },
  icon: {
    pointerEvents: 'none',
    position: 'absolute',
    left: sizes.regular,
    top: sizes.regular,
    zIndex: 1
  },
  input: {
    paddingLeft: sizes.largeIii
  }
})

module.exports = styleSheet
