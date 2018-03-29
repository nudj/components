const { merge } = require('@nudj/library')

const { StyleSheet, colors, sizes, typography } = require('../../css')

const styleSheet = StyleSheet.create({
  root: {
    position: 'relative',
    display: 'inline-block'
  },
  input: {
    opacity: 0,
    position: 'absolute',
    cursor: 'inherit'
  },
  labelContainer: merge(typography.type.smallIi, {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: colors.grey,
    borderRadius: sizes.largeIi,
    backgroundColor: 'transparent',
    color: colors.greyDark,
    display: 'inline-block',
    fontWeight: typography.fontWeight.bold,
    paddingTop: sizes.smallIi,
    paddingRight: sizes.smallIi,
    paddingBottom: sizes.smallIi,
    paddingLeft: sizes.smallIi,
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'backgroundColor 150ms',
    lineHeight: 1,
    cursor: 'pointer',
    verticalAlign: 'middle',
    ':hover': {
      borderColor: colors.greyDark
    }
  }),
  labelContainerChecked: {
    backgroundColor: colors.greyLight,
    borderColor: colors.greyLight,
    color: colors.text,
    ':hover': {
      backgroundColor: colors.greyLight,
      borderColor: colors.greyLight,
      color: colors.greyDarkest
    }
  },
  labelContainerDisabled: {
    opacity: 0.2,
    cursor: 'default',
    ':hover': {
      borderColor: colors.grey,
      backgroundColor: 'transparent',
      color: colors.greyDark
    }
  },
  labelContainerCheckedDisabled: {
    backgroundColor: colors.greyLight,
    borderColor: colors.greyLight,
    color: colors.text,
    ':hover': {
      backgroundColor: colors.greyLight,
      borderColor: colors.greyLight,
      color: colors.text
    }
  },
  label: {
    verticalAlign: 'middle'
  },
  icon: {
    marginLeft: sizes.smallIi,
    width: '1.5em',
    height: '1.5em',
    flexShrink: 0,
    verticalAlign: 'middle'
  },
  iconBox: {
    stroke: colors.grey,
    strokeWidth: '2px'
  },
  iconBoxChecked: {
    fill: 'white'
  },
  iconCheckmark: {
    fill: colors.midRed,
    transformOrigin: '50% 50%',
    transition: 'transform 150ms, opacity 150ms'
  },
  iconCheckmarkUnchecked: {
    opacity: 0,
    transform: 'scale(0)'
  },
  iconCheckmarkChecked: {
    opacity: 1,
    transform: 'scale(1)'
  }
})

module.exports = styleSheet
