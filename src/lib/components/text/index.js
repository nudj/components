// @flow
const React = require('react')
const classnames = require('classnames')

const getStyle = require('./style.css')

type TextProps = {
  className?: string,
  children?: React.Node,
  elm?: string
}

const Text = (props: TextProps) => {
  const { className, children, elm = 'span' } = props

  const defaultStyles: Object = getStyle()

  return React.createElement(
    elm,
    {
      className: classnames(defaultStyles.root, className)
    },
    children
  )
}

module.exports = Text
