const { merge } = require('@nudj/library')

const { StyleSheet, colors, sizes, typography } = require('../../css')

const styleSheet = StyleSheet.create({
  root: {
    position: 'relative'
  },
  disabled: {
    opacity: 0.25
  },
  input: {
    opacity: 0,
    position: 'absolute',
    cursor: 'inherit',
    ':focus + label': {
      color: colors.primary
    }
  },
  labelContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'inherit',
    color: colors.grey
  },
  icon: {
    width: '1.5em',
    height: '1.5em',
    flexShrink: 0
  },
  iconBox: {
    stroke: 'currentColor',
    strokeWidth: '2px'
  },
  iconCheckmark: {
    fill: colors.midRed,
    transformOrigin: '8px 50%',
    transition: 'transform 150ms, opacity 150ms'
  },
  iconCheckmarkUnchecked: {
    opacity: 0,
    transform: 'scale(0)'
  },
  iconCheckmarkChecked: {
    opacity: 1,
    transform: 'scale(1)'
  },
  iconSquare: {
    transformOrigin: '8px 50%',
    transition: 'transform 150ms, opacity 150ms',
    fill: colors.grey
  },
  iconSquareIndeterminate: {
    opacity: 1,
    transform: 'scale(1)'
  },
  iconSquareDeterminate: {
    opacity: 0,
    transform: 'scale(0)'
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
