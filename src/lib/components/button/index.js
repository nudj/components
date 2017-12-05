// @flow
const React = require('react')

const InlineAction = require('../inline-action')

type Props = {
  type?: 'submit' | 'reset' | 'button',
  onClick: Object => void,
  value?: string,
  children: React.Node,
  Component: React.ElementType,
  rest?: Array<mixed>
}

const Button = (props: Props) => {
  const { children, type, onClick, Component, ...rest } = props

  return (
    <InlineAction {...rest} type={type} Component={Component} onClick={onClick}>
      {children}
    </InlineAction>
  )
}

Button.defaultProps = {
  volume: 'murmur',
  onClick: () => {},
  Component: 'button'
}

module.exports = Button
