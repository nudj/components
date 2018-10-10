const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css } = require('../../css')
const styleSheet = require('./style.css')

const Text = props => {
  const { style, size, children, element: Component, nonsensitive, ...rest } = props

  return (
    <Component {...rest} className={css(!nonsensitive && FS_HIDE_CLASS, styleSheet[size], style)}>
      {children}
    </Component>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  style: CustomPropTypes.style,
  element: CustomPropTypes.component,
  nonsensitive: PropTypes.bool,
  size: PropTypes.oneOf([
    'largeVi',
    'largeV',
    'largeIv',
    'largeIii',
    'largeIi',
    'largeI',
    'regular',
    'smallI',
    'smallIi'
  ])
}

Text.defaultProps = {
  element: 'span',
  size: 'regular',
  nonsensitive: FS_SHOW
}

module.exports = Text
