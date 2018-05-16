/* global Style */
// @flow
const React = require('react')

const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css } = require('../../css')
const styleSheet = require('./style.css')

type TextProps = {
  children: React.Node,
  style?: Style,
  element: React.ElementType,
  nonsensitive?: boolean,
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
  const { style, size, children, element: Component, nonsensitive, ...rest } = props

  return (
    <Component {...rest} className={css(!nonsensitive && FS_HIDE_CLASS, styleSheet[size], style)}>
      {children}
    </Component>
  )
}

Text.defaultProps = {
  element: 'span',
  size: 'regular',
  nonsensitive: FS_SHOW
}

module.exports = Text
