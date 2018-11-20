const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css } = require('../../css')
const { buttonStyleSheet, linkStyleSheet } = require('./style.css')

const contextToVolumeMap = {
  primary: 'cheer',
  secondary: 'murmur',
  tertiary: 'yell',
  success: 'shout',
  danger: 'scream'
}

const InlineAction = props => {
  const {
    volume,
    context,
    children,
    style,
    subtle,
    Component,
    disabled,
    nonsensitive,
    ...rest
  } = props

  const styleType = context ? contextToVolumeMap[context] : volume
  const styleSheet = subtle ? linkStyleSheet : buttonStyleSheet

  return (
    <Component
      {...rest}
      disabled={disabled}
      className={css(
        !nonsensitive && FS_HIDE_CLASS,
        styleSheet.root,
        styleSheet[styleType],
        disabled && styleSheet.disabled,
        style
      )}
    >
      {children}
    </Component>
  )
}

InlineAction.propTypes = {
  volume: PropTypes.oneOf(['scream', 'yell', 'shout', 'cheer', 'murmur']).isRequired,
  context: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger']),
  children: PropTypes.node.isRequired,
  style: CustomPropTypes.style,
  Component: CustomPropTypes.component,
  subtle: PropTypes.bool,
  disabled: PropTypes.bool,
  nonsensitive: PropTypes.bool
}

InlineAction.defaultProps = {
  volume: 'murmur',
  style: {},
  nonsensitive: FS_SHOW
}

module.exports = InlineAction
