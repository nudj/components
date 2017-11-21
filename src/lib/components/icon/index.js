// @flow
const React = require('react')

const getStyle = require('./style.css')
const icons = require('../../assets/icons')

type IconProps = {
  name: string,
  className?: string
}

const Icon = (props: IconProps) => {
  const { name, className } = props
  const style = className || getStyle()
  const Icon = icons[name]

  return (
    <span>
      <Icon className={style} />
    </span>
  )
}

module.exports = Icon
