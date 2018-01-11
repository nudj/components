/* global Style */
// @flow
const React = require('react')

const { css } = require('../../css')
const defaultStyleSheet = require('./style.css')

type ButtonContainerProps = {
  style: Style,
  children: React.Node,
  type?: 'submit' | 'reset' | 'button',
  rest?: Array<mixed>
}

const ButtonContainer = ({
  style,
  children,
  type,
  ...rest
}: ButtonContainerProps) => (
  <button {...rest} type={type} className={css(defaultStyleSheet.root, style)}>
    {children}
  </button>
)

ButtonContainer.defaultProps = {
  style: {},
  type: 'button'
}

module.exports = ButtonContainer
