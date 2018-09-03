const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')

const IconAction = require('../icon-action')

const IconButton = (props) => {
  const {
    children,
    type,
    onClick,
    Component,
    ...rest
  } = props

  return (
    <IconAction
      {...rest}
      type={type}
      Component={Component}
      onClick={onClick}
    >
      {children}
    </IconAction>
  )
}

IconButton.defaultProps = {
  volume: 'murmur',
  onClick: () => {},
  Component: 'button',
  type: 'button'
}

IconButton.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  onClick: PropTypes.func,
  value: PropTypes.string,
  children: PropTypes.node,
  Component: CustomPropTypes.component
}

module.exports = IconButton
