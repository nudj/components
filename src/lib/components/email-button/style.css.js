const { StyleSheet, colors } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {
    backgroundColor: colors.gmail,
    borderColor: colors.gmail,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.gmailLight,
      borderColor: colors.gmailLight
    },
    ':focus': {
      backgroundColor: colors.gmailLight,
      borderColor: colors.gmailLight
    },
    ':active': {
      backgroundColor: colors.gmailLight,
      borderColor: colors.gmailLight
    }
  }
})

module.exports = stylesheet
