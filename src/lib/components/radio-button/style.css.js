const { merge } = require('@nudj/library')

const { StyleSheet, colors, sizes, typography } = require('../../css')

const styleSheet = StyleSheet.create({
  root: {
    position: 'relative'
  },
  input: {
    opacity: 0,
    position: 'absolute'
  },
  icon: {
    width: '1.5em',
    height: '1.5em',
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  iconCircle: {
    fill: 'transparent',
    stroke: colors.grey,
    strokeWidth: '2px'
  },
  iconDot: {
    fill: colors.midRed,
    transformOrigin: '50% 50%',
    transition: 'transform 150ms, opacity 150ms'
  },
  iconDotUnchecked: {
    opacity: 0,
    transform: 'scale(0)'
  },
  iconDotChecked: {
    opacity: 1,
    transform: 'scale(1)'
  },
  label: merge(typography.type.regular, {
    display: 'inline-block',
    verticalAlign: 'middle',
    color: colors.text,
    paddingLeft: sizes.smallIi,
    userSelect: 'none'
  })
})

module.exports = styleSheet
