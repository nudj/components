const { StyleSheet, sizes, colors } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  value: {
    flexGrow: 1
  },
  icon: {
    display: 'inline-block',
    marginRight: '0.5rem',
    fontSize: '0.35em'
  },
  positive: {
    color: colors.success
  },
  negative: {
    color: colors.danger
  },
  label: {
    marginLeft: 0
  },
  comparator: {
    color: colors.grey,
    marginTop: sizes.smallIi
  }
})

module.exports = stylesheet
