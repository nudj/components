const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css } = require('../../css')
const styleSheet = require('./style.css')

const Pill = props => {
  const { volume, children, style, nonsensitive, ...rest } = props

  return (
    <span {...rest} className={css(!nonsensitive && FS_HIDE_CLASS, styleSheet.root, styleSheet[volume], style)}>
      {children}
    </span>
  )
}

Pill.propTypes = {
  volume: PropTypes.oneOf(['murmur', 'whisper']),
  children: PropTypes.node,
  style: CustomPropTypes.style,
  nonsensitive: PropTypes.bool
}

Pill.defaultProps = {
  volume: 'murmur',
  style: {},
  nonsensitive: FS_SHOW
}

module.exports = Pill
