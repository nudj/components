// @flow
const React = require('react')

const { css } = require('../../css')
const styleSheet = require('./style.css')
const icons = require('./icons')

type IconProps = {
  name: string,
  style?: Object
}

const Icon = (props: IconProps) => {
  const { name, style } = props
  const Icon = icons[name]

  if (!Icon) {
    throw new Error('Invalid icon name')
  }

  return <Icon className={css(styleSheet.root, styleSheet[name], style)} />
}

module.exports = Icon
