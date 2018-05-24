const { StyleSheet, sizes, colors } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  value: {
    flexGrow: 1,
    lineHeight: 1,
    marginTop: sizes.smallIii
  },
  icon: {
    display: 'inline-block',
    fontSize: '0.5em',
    marginTop: `-${sizes.smallIi}`,
    marginLeft: `-${sizes.smallIii}`
  },
  positive: {
    color: colors.success
  },
  negative: {
    color: colors.danger
  },
  label: {
    marginLeft: 0,
    color: colors.greyDarker
  },
  comparator: {
    color: colors.grey,
    marginTop: sizes.smallIi
  }
})

module.exports = stylesheet
