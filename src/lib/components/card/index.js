// @flow
const React = require('react')
const classnames = require('classnames')

const getStyle = require('./style.css')

type Props = {
  children: React.Node,
  className?: string
}

const Card = (props: Props) => {
  const { children, className } = props
  const style: Object = getStyle()

  return <div className={classnames(style.root, className)}>{children}</div>
}

module.exports = Card
