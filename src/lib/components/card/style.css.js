const { css } = require('../../css')
const { colors, sizes, utilities } = require('../../css')

const style = {
  root: {
    backgroundColor: colors.white,
    borderRadius: utilities.borderRadius,
    boxShadow: utilities.boxShadow[10].narrow,
    padding: sizes.regular
  }
}

module.exports = css(style)
