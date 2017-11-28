const { merge } = require('@nudj/library')

const { css, typography, colors, sizes, utilities } = require('../../css')

const styles = {
  root: {
    position: 'relative'
  },
  select: merge(typography.type.regular, {
    appearance: 'none',
    backgroundColor: colors.white,
    border: `1px solid ${colors.grey}`,
    borderRadius: utilities.borderRadius,
    boxShadow: utilities.boxShadow[0].wide,
    color: colors.text,
    height: '100%',
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
  chevron: {
    fill: colors.greyDark,
    pointerEvents: 'none',
    position: 'absolute',
    right: sizes.regular,
    top: '50%',
    transform: 'translateY(-50%) rotate(180deg)'
  }
}

module.exports = css(styles)
