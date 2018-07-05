const { merge } = require('@nudj/library')

const { StyleSheet, typography, sizes, colors } = require('../../css')

const styleSheet = StyleSheet.create({
  root: {},
  label: merge(typography.type.largeI, {
    color: colors.primary
  }),
  requiredNotice: merge(typography.type.smallIi, {
    color: colors.greyDark,
    verticalAlign: 'super'
  }),
  inputContainer: {
    marginTop: sizes.smallIii
  },
  description: merge(typography.type.regular, {
    color: colors.greyDarker,
    marginTop: sizes.smallIii
  })
})

module.exports = styleSheet
