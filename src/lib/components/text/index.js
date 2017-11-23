// @flow
const React = require('react')
const classnames = require('classnames')

const getStyle = require('./style.css')

type TextProps = {
  children: React.Node,
  className?: string,
  elm?: string
}

const Text = (props: TextProps) => {
  const { className, children, elm: Component = 'span' } = props

  const defaultStyles: Object = getStyle()

  return (
    <Component className={classnames(defaultStyles.root, className)}>
      {children}
    </Component>
  )
}

module.exports = Text
