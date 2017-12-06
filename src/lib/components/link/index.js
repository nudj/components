/* global Style */
// @flow
const React = require('react')
const flatten = require('lodash/flatten')

const defaultStyle = require('./style.css')
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
  const composedStyle = flatten([
    inline ? defaultStyle.inline : null,
    style
  ]).filter(ss => ss != null)

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
