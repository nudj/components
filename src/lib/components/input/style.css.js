const { merge } = require('@nudj/library')

const { aphrodite, typography, colors, sizes, utilities } = require('../../css')

const stylesheet = aphrodite.StyleSheet.create({
  root: {},
  input: merge(typography.type.regular, {
    backgroundColor: colors.white,
    border: `1px solid ${colors.grey}`,
    borderRadius: utilities.borderRadius,
    boxShadow: utilities.boxShadow[0].wide,
    color: colors.text,
    paddingBottom: sizes.smallI,
    paddingLeft: sizes.regular,
    paddingRight: sizes.regular,
    paddingTop: sizes.smallI,
    transition: 'box-shadow 150ms ease-in-out',
    width: '100%',
    ':focus': {
      boxShadow: utilities.boxShadow[10].wide,
      borderColor: colors.primary,
      outline: 0
    },
    '::placeholder': {
      color: colors.grey
    }
  }),
  inputError: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    color: colors.danger,
    borderColor: colors.danger,
    ':focus': {
      borderColor: colors.danger
    }
  },
  error: merge(typography.type.regular, {
    paddingBottom: sizes.smallI,
    paddingLeft: sizes.regular,
    paddingRight: sizes.regular,
    paddingTop: sizes.smallI,
    backgroundColor: colors.danger,
    color: colors.white,
    borderBottomRightRadius: utilities.borderRadius,
    borderBottomLeftRadius: utilities.borderRadius
  })
})

module.exports = stylesheet
