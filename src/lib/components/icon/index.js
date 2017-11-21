// @flow
const React = require('react')
const classnames = require('classnames')

const icons = require('../../assets/icons')

type IconProps = {
  name: string,
  className?: string
}

const Icon = (props: IconProps) => {
  const { name, className } = props
  const Icon = icons[name]

  return <Icon className={classnames(className)} />
}

module.exports = Icon
