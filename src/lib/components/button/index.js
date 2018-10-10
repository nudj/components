const React = require('react')
const PropTypes = require('prop-types')
const CustomPropTypes = require('../../helpers/prop-types')
const InlineAction = require('../inline-action')

const Button = props => {
  const { children, type, onClick, Component, ...rest } = props

  return (
    <InlineAction {...rest} type={type} Component={Component} onClick={onClick}>
      {children}
    </InlineAction>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  onClick: PropTypes.func,
  value: PropTypes.string,
  children: PropTypes.node.isRequired,
  Component: CustomPropTypes.component
}

Button.defaultProps = {
  volume: 'murmur',
  onClick: () => {},
  Component: 'button',
  type: 'button'
}

module.exports = Button
