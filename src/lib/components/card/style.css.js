const { StyleSheet, colors, sizes, utilities } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    borderRadius: utilities.borderRadius,
    boxShadow: utilities.boxShadow[10].narrow,
    paddingTop: sizes.largeIi,
    paddingRight: sizes.largeIi,
    paddingBottom: sizes.largeIi,
    paddingLeft: sizes.largeIi
  }
})

module.exports = stylesheet
