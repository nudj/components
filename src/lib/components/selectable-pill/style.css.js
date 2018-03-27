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
  label: merge(typography.type.smallIi, {
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
    cursor: 'pointer'
  }),
  labelChecked: {
    backgroundColor: colors.greyLight,
    borderColor: colors.greyLight,
    color: colors.text,
    ':hover': {
      backgroundColor: colors.greyLight,
      borderColor: colors.greyLight,
      color: colors.greyDarkest
    }
  },
  closeIcon: {
    marginLeft: sizes.smallIi,
    float: 'right'
  }
})

module.exports = styleSheet
