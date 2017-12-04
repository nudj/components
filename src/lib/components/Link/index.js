// @flow
const React = require('react')

const { css } = require('../../css')
const stylesheet = require('./style.css')

type Props = {
  volume:
    | 'scream'
    | 'yell'
    | 'shout'
    | 'cheer'
    | 'murmur'
    | 'whistle'
    | 'whisper',
  children: React.Node,
  style: Object,
  Component: React.ElementType,
  href: string,
  isReactRouter?: boolean
}

const Button = (props: Props) => {
  const { volume, children, style, href, Component, isReactRouter } = props

  const routingProps = isReactRouter
    ? {
        to: href
      }
    : {
        href
      }

  return (
    <Component
      {...routingProps}
      className={css(stylesheet.root, stylesheet[volume], style)}
    >
      {children}
    </Component>
  )
}

Button.defaultProps = {
  volume: 'murmur',
  type: 'button',
  Component: 'a'
}

module.exports = Button
