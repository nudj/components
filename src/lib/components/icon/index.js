const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { css } = require('../../css')
const styleSheet = require('./style.css')
const icons = require('./icons')

const Icon = props => {
  const { name, style } = props
  const Icon = icons[name]

  if (!Icon) {
    throw new Error('Invalid icon name')
  }

  return <Icon className={css(styleSheet.root, styleSheet[name], style)} />
}

Icon.propTypes = {
  name: PropTypes.string,
  style: CustomPropTypes.style
}

module.exports = Icon
