const { StyleSheet, colors } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {
    backgroundColor: colors.linkedin,
    borderColor: colors.linkedin,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.linkedinLight,
      borderColor: colors.linkedinLight
    },
    ':focus': {
      backgroundColor: colors.linkedinLight,
      borderColor: colors.linkedinLight
    },
    ':active': {
      backgroundColor: colors.linkedinLight,
      borderColor: colors.linkedinLight
    }
  }
})

module.exports = stylesheet
