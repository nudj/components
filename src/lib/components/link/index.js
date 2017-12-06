// @flow
const React = require('react')

const InlineAction = require('../inline-action')

type Props = {
  children: React.Node,
  Component: React.ElementType,
  href: string,
  rest?: Array<mixed>
}

const Link = (props: Props) => {
  const { children, Component, href, ...rest } = props

  return (
    <InlineAction {...rest} href={href} Component={Component}>
      {children}
    </InlineAction>
  )
}

Link.defaultProps = {
  volume: 'murmur',
  Component: 'a'
}

module.exports = Link
