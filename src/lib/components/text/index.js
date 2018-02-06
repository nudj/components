/* global Style */
// @flow
const React = require('react')

const { css } = require('../../css')
const styleSheet = require('./style.css')

type TextProps = {
  children: React.Node,
  style?: Style,
  element: React.ElementType,
  size:
    | 'largeVi'
    | 'largeV'
    | 'largeIv'
    | 'largeIii'
    | 'largeIi'
    | 'largeI'
    | 'regular'
    | 'smallI'
    | 'smallIi',
  rest?: Array<mixed>
}

const Text = (props: TextProps) => {
  const { style, size, children, element: Component, ...rest } = props

  return (
    <Component {...rest} className={css(styleSheet[size], style)}>
      {children}
    </Component>
  )
}

Text.defaultProps = {
  element: 'span',
  size: 'regular'
}

module.exports = Text
