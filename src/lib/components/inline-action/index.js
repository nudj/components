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
  rest?: Array<mixed>
}

const InlineAction = (props: Props) => {
  const { volume, children, style, Component, ...rest } = props

  return (
    <Component
      {...rest}
      className={css(stylesheet.root, stylesheet[volume], style)}
    >
      {children}
    </Component>
  )
}

InlineAction.defaultProps = {
  volume: 'murmur',
  style: {}
}

module.exports = InlineAction
