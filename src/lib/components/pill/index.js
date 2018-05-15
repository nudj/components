/* global Style */
// @flow
const React = require('react')

const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css } = require('../../css')
const styleSheet = require('./style.css')

type PillProps = {
  volume: 'murmur' | 'whisper',
  children: React.Node,
  style: Style,
  rest?: Array<mixed>,
  nonSensitive?: boolean
}

const Pill = (props: PillProps) => {
  const { volume, children, style, fsShow, ...rest } = props

  return (
    <span {...rest} className={css(!fsShow && FS_HIDE_CLASS, styleSheet.root, styleSheet[volume], style)}>
      {children}
    </span>
  )
}

Pill.defaultProps = {
  volume: 'murmur',
  style: {},
  fsShow: FS_SHOW
}

module.exports = Pill
