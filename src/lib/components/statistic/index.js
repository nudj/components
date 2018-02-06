// @flow
const React = require('react')

const { css, mergeStyleSheets } = require('../../css')
const mss = require('../../css/modifiers.css')
const defaultStyleSheet = require('./style.css')
const Icon = require('../icon')
const Text = require('../text')

type StyleSheet = {
  root?: Object,
  value?: Object,
  positive?: Object,
  negative?: Object,
  icon?: Object,
  label?: Object,
}

type Props = {
  value: React.Node,
  label: React.Node,
  direction?: 'asc' | 'desc',
  correlation?: 'positive' | 'negative',
  styleSheet: StyleSheet,
}

const getDirectionIcon = (direction, style) => {
  switch (direction) {
    case 'asc':
      return <Icon name='chevron' style={style.icon} />
    case 'desc':
      return <Icon name='chevron' style={[style.icon, mss.rotate180]} />
    default:
      return null
  }
}

const Statistic = ({ value, label, direction, correlation, styleSheet }: Props) => {
  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

  return (
    <div className={css(style.root)}>
      <Text
        size='largeVi'
        element='dt'
        style={[style.value, style[correlation]]}
      >
        {getDirectionIcon(direction, style)}
        {value}
      </Text>
      <Text element='dd' style={style.label}>
        {label}
      </Text>
    </div>
  )
}

Statistic.defaultProps = {
  styleSheet: {}
}

module.exports = Statistic
