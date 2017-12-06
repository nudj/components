/* global Style */
// @flow
const React = require('react')

const defaultStyle = require('./style.css')
const { mergeStyle } = require('../../css')
const InlineAction = require('../inline-action')

type Props = {
  children: React.Node,
  Component: React.ElementType,
  href: string,
  inline?: boolean,
  style: Style,
  rest?: Array<mixed>
}

const Link = (props: Props) => {
  const { children, Component, href, inline, style, ...rest } = props
  const composedStyle = mergeStyle(inline ? defaultStyle.inline : null, style)

  return (
    <InlineAction
      {...rest}
      href={href}
      Component={Component}
      style={composedStyle}
    >
      {children}
    </InlineAction>
  )
}

Link.defaultProps = {
  volume: 'murmur',
  Component: 'a',
  style: {}
}

module.exports = Link
