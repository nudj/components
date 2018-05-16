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
  nonSensitive?: boolean,
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
  const { style, size, children, element: Component, nonSensitive, ...rest } = props

  return (
    <Component {...rest} className={css(!nonSensitive && FS_HIDE_CLASS, styleSheet[size], style)}>
      {children}
    </Component>
  )
}

Text.defaultProps = {
  element: 'span',
  size: 'regular',
  nonSensitive: FS_SHOW
}

module.exports = Text
