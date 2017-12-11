/* global Style */
// @flow
const React = require('react')

const { css } = require('../../css')
const { buttonStyleSheet, linkStyleSheet } = require('./style.css')

type InlineActionProps = {
  volume: 'scream' | 'yell' | 'shout' | 'cheer' | 'murmur',
  children: React.Node,
  style: Style,
  Component: React.ElementType,
  subtle?: boolean,
  rest?: Array<mixed>
}

const InlineAction = (props: InlineActionProps) => {
  const { volume, children, style, subtle, Component, ...rest } = props

  const styleSheet = subtle ? linkStyleSheet : buttonStyleSheet

  return (
    <Component
      {...rest}
      className={css(styleSheet.root, styleSheet[volume], style)}
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
