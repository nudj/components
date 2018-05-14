const { StyleSheet, colors } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {
    backgroundColor: colors.whatsapp,
    borderColor: colors.whatsapp,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.whatsappLight,
      borderColor: colors.whatsappLight
    },
    ':focus': {
      backgroundColor: colors.whatsappLight,
      borderColor: colors.whatsappLight
    },
    ':active': {
      backgroundColor: colors.whatsappLight,
      borderColor: colors.whatsappLight
    }
  }
})

module.exports = stylesheet
