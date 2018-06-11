const { StyleSheet, colors, sizes } = require('../../css')

module.exports = StyleSheet.create({
  root: {
    paddingTop: sizes.regular,
    paddingBottom: sizes.regular,
    paddingLeft: sizes.regular,
    paddingRight: sizes.regular
  },
  default: {
    backgroundColor: colors.white,
    borderColor: colors.greyLight,
    color: colors.text
  },
  success: {
    backgroundColor: colors.success,
    borderColor: colors.success,
    color: colors.white
  },
  error: {
    backgroundColor: colors.danger,
    borderColor: colors.danger,
    color: colors.white
  }
})
