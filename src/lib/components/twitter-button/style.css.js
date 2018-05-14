const { StyleSheet, colors } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {
    backgroundColor: colors.twitter,
    borderColor: colors.twitter,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.twitterLight,
      borderColor: colors.twitterLight
    },
    ':focus': {
      backgroundColor: colors.twitterLight,
      borderColor: colors.twitterLight
    },
    ':active': {
      backgroundColor: colors.twitterLight,
      borderColor: colors.twitterLight
    }
  }
})

module.exports = stylesheet
