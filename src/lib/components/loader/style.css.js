const { StyleSheet, colors, sizes } = require('../../css')

const spin = {
  '0%': {
    transform: 'scale(0)'
  },
  '100%': {
    transform: 'scale(1.0)',
    opacity: 0
  }
}

const styleSheet = StyleSheet.create({
  spinner: {
    width: sizes.largeIi,
    height: sizes.largeIi,
    backgroundColor: colors.primary,
    borderRadius: '100%',
    animationName: spin,
    animationDuration: '1.0s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out'
  }
})

module.exports = styleSheet
