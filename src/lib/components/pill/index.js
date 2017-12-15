/* global Style */
// @flow
const React = require('react')

const { css } = require('../../css')
const styleSheet = require('./style.css')

type PillProps = {
  volume: 'murmur' | 'whisper',
  children: React.Node,
  style: Style,
  rest?: Array<mixed>
}

const Pill = (props: PillProps) => {
  const { volume, children, style, ...rest } = props

  return (
    <span {...rest} className={css(styleSheet.root, styleSheet[volume], style)}>
      {children}
    </span>
  )
}

Pill.defaultProps = {
  volume: 'murmur',
  style: {}
}

module.exports = Pill
