// @flow
const React = require('react')

const { css } = require('../../css')
const styleSheet = require('./style.css')

type TextProps = {
  children: React.Node,
  style?: Object,
  element: React.ElementType
}

const Text = (props: TextProps) => {
  const { style, children, element: Component } = props

  return (
    <Component className={css(styleSheet.root, style)}>{children}</Component>
  )
}

Text.defaultProps = {
  element: 'span'
}

module.exports = Text
