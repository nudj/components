/* global Style */
// @flow
const React = require('react')

const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css } = require('../../css')
const { buttonStyleSheet, linkStyleSheet } = require('./style.css')

type InlineActionProps = {
  volume: 'scream' | 'yell' | 'shout' | 'cheer' | 'murmur',
  children: React.Node,
  style: Style,
  Component: React.ElementType,
  subtle?: boolean,
  disabled?: boolean,
  rest?: Array<mixed>,
  nonSensitive?: boolean
}

const InlineAction = (props: InlineActionProps) => {
  const {
    volume,
    children,
    style,
    subtle,
    Component,
    disabled,
    nonSensitive,
    ...rest
  } = props

  const styleSheet = subtle ? linkStyleSheet : buttonStyleSheet

  return (
    <Component
      {...rest}
      disabled={disabled}
      className={css(
        !nonSensitive && FS_HIDE_CLASS,
        styleSheet.root,
        styleSheet[volume],
        disabled && styleSheet.disabled,
        style
      )}
    >
      {children}
    </Component>
  )
}

InlineAction.defaultProps = {
  volume: 'murmur',
  style: {},
  nonSensitive: FS_SHOW
}

module.exports = InlineAction
