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
    marginTop: sizes.smallIi
  },
  description: merge(typography.type.regular, {
    color: colors.text,
    marginTop: sizes.smallIi
  })
})

module.exports = styleSheet
