const { StyleSheet, colors } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {
    backgroundColor: colors.facebook,
    borderColor: colors.facebook,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.facebookLight,
      borderColor: colors.facebookLight
    },
    ':focus': {
      backgroundColor: colors.facebookLight,
      borderColor: colors.facebookLight
    },
    ':active': {
      backgroundColor: colors.facebookLight,
      borderColor: colors.facebookLight
    }
  }
})

module.exports = stylesheet
