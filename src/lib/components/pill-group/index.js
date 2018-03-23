// @flow
const React = require('react')

const { css, mergeStyleSheets } = require('../../css')
const defaultStyleSheet = require('./style.css')
const Pill = require('../pill')

type StyleSheet = {
  root?: Object,
  pill?: Object,
}

type PillProps = {
  volume?: 'murmur' | 'whisper',
  styleSheet: StyleSheet,
  values: Array<React.Node>,
  rest?: Array<mixed>
}

const PillGroup = ({ volume, values, styleSheet, ...rest }: PillProps) => {
  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

  return (
    <div className={css(style.root)}>
      {values.map((value, i) => (
        <Pill key={i} volume={volume} style={style.pill}>
          {value}
        </Pill>
      ))}
    </div>
  )
}

PillGroup.defaultProps = {
  styleSheet: {},
  values: []
}

module.exports = PillGroup
