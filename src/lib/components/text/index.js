// @flow
const React = require('react')

const { css } = require('../../css')
const styleSheet = require('./style.css')

type TextProps = {
  children: React.Node,
  styles?: Object,
  element: React.ElementType
}

const Text = (props: TextProps) => {
  const { styles, children, element: Component } = props

  return (
    <Component className={css(styleSheet.root, styles)}>{children}</Component>
  )
}

Text.defaultProps = {
  element: 'span'
}

module.exports = Text
