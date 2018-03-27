const { StyleSheet, sizes } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {
    marginTop: `-${sizes.smallIii}`,
    ':nth-child(n) > *': {
      marginTop: sizes.smallIii,
      marginRight: sizes.smallIii
    },
    ':nth-child(n) > *:last-child': {
      marginRight: 0
    }
  }
})

module.exports = stylesheet
