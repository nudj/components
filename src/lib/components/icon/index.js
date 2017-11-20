// @flow
const React = require('react')
const get = require('lodash/get')

const getStyle = require('./style.css')
const icons = require('../../assets/icons')

type IconProps = {
  name: string,
  className?: string
}

const Icon = (props: IconProps) => {
  const { name, className } = props
  const defaultClass = getStyle()
  const style = className || defaultClass

  const setSvg = () => ({ __html: get(icons, name, '') })

  return (
    <span
      className={style}
      dangerouslySetInnerHTML={setSvg()}
    />
  )
}

module.exports = Icon
