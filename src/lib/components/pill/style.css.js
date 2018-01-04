const { merge } = require('@nudj/library')

const { StyleSheet, colors, typography, sizes } = require('../../css')

const styleSheet = StyleSheet.create({
  root: merge(typography.type.smallIi, {
    border: `1px solid`,
    borderRadius: sizes.largeIi,
    cursor: 'default',
    display: 'inline-block',
    fontWeight: typography.fontWeight.bold,
    paddingTop: sizes.smallIii,
    paddingRight: sizes.smallIi,
    paddingBottom: sizes.smallIii,
    paddingLeft: sizes.smallIi,
    textAlign: 'center',
    textDecoration: 'none'
  }),
  murmur: {
    backgroundColor: colors.greyLight,
    borderColor: colors.greyLight,
    color: colors.text
  },
  whisper: {
    backgroundColor: colors.transparent,
    borderColor: colors.greyLight,
    color: colors.greyDark
  }
})

module.exports = styleSheet
