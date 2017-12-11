const { merge } = require('@nudj/library')

const { StyleSheet, colors, sizes, typography } = require('../../css')

const styleSheet = StyleSheet.create({
  root: typography.type.regular,
  header: {},
  headerRow: {},
  heading: {
    color: colors.primary,
    fontWeight: typography.fontWeight.bold,
    paddingBottom: sizes.smallI,
    paddingLeft: sizes.smallIi,
    paddingRight: sizes.smallIi,
    paddingTop: sizes.smallI,
    textAlign: 'left'
  },
  body: {},
  row: {},
  cell: merge(typography.type.regular, {
    color: colors.text,
    paddingBottom: sizes.smallI,
    paddingLeft: sizes.smallIi,
    paddingRight: sizes.smallIi,
    paddingTop: sizes.smallI
  })
})

module.exports = styleSheet
