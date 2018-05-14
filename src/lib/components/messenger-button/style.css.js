const { StyleSheet, colors } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {
    backgroundColor: colors.messenger,
    borderColor: colors.messenger,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.messengerLight,
      borderColor: colors.messengerLight
    },
    ':focus': {
      backgroundColor: colors.messengerLight,
      borderColor: colors.messengerLight
    },
    ':active': {
      backgroundColor: colors.messengerLight,
      borderColor: colors.messengerLight
    }
  }
})

module.exports = stylesheet
