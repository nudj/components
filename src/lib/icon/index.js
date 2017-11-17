// @flow
const React = require('react')
const classnames = require('classnames')

const getStyle = require('./style.css')

type IconProps = {
  name: string,
  className?: string
}

const Icon = (props: IconProps) => {
  const defaultClass = getStyle()
  const style = props.className || defaultClass

  return (
    <img src={`assets/icons/${props.name}.svg`} className={classnames(style)} />
  )
}

module.exports = Icon
