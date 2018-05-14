const React = require('react')
const PropTypes = require('prop-types')

const { ComponentPropType } = require('../../helpers/prop-types')

const IconAction = require('../icon-action')

const IconLink = (props) => {
  const {
    children,
    Component,
    href: intendedHref,
    style,
    disabled,
    ...rest
  } = props

  const href = disabled ? '' : intendedHref

  return (
    <IconAction
      {...rest}
      disabled={disabled}
      href={href}
      Component={Component}
      style={style}
    >
      {children}
    </IconAction>
  )
}

IconLink.defaultProps = {
  volume: 'murmur',
  Component: 'a',
  style: {}
}

IconLink.propTypes = {
  href: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string,
  children: PropTypes.node,
  Component: ComponentPropType
}

module.exports = IconLink
