const { StyleSheet, colors } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {},
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    maxWidth: '37.5rem',
    maxHeight: '28.125rem',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 0
  },
  overlay: {
    backgroundColor: colors.overlay[50],
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0
  }
})

module.exports = stylesheet
