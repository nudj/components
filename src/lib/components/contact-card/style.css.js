const { StyleSheet, colors, sizes } = require('../../css')

const styleSheet = StyleSheet.create({
  root: {
    textAlign: 'center'
  },
  name: {
    color: colors.primary
  },
  attributes: {
    color: colors.text,
    marginTop: sizes.smallIi
  },
  recommendedForContainer: {
    marginTop: sizes.largeI,
    color: colors.text
  },
  recommendedForItems: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 1,
    flexWrap: 'wrap',
    marginLeft: `-${sizes.smallIii}`,
    marginRight: `-${sizes.smallIii}`,
    justifyContent: 'center'
  },
  recommendedForItem: {
    marginTop: sizes.smallIi,
    marginLeft: sizes.smallIii,
    marginRight: sizes.smallIii
  },
  children: {
    marginTop: sizes.largeIi
  }
})

module.exports = styleSheet
