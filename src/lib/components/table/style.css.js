const { css } = require('../../css')
const colors = require('../../css/colors')
const sizes = require('../../css/sizes')
const { type, fontWeight } = require('../../css/typography')
const { merge } = require('@nudj/library')

const styles = {
  root: type.regular,
  header: {},
  headerRow: {},
  heading: {
    color: colors.primary,
    fontWeight: fontWeight.bold,
    paddingBottom: sizes.smallI,
    paddingLeft: sizes.smallIi,
    paddingRight: sizes.smallIi,
    paddingTop: sizes.smallI,
    textAlign: 'left'
  },
  body: {},
  row: {},
  cell: merge(type.regular, {
    color: colors.text,
    paddingBottom: sizes.smallI,
    paddingLeft: sizes.smallIi,
    paddingRight: sizes.smallIi,
    paddingTop: sizes.smallI
  })
}

module.exports = css(styles)
