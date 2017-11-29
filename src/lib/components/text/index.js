// @flow
const React = require('react')

const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')

type StyleSheet = {
  root?: Object
}

type TextProps = {
  children: React.Node,
  styleSheet: StyleSheet,
  elm: React.ElementType
}

const Text = (props: TextProps) => {
  const { styleSheet, children, elm: Component } = props

  const classNames = mergeStyleSheets(defaultStyleSheet, styleSheet)

  return <Component className={css(classNames.root)}>{children}</Component>
}

Text.defaultProps = {
  Component: 'span',
  styleSheet: {}
}

module.exports = Text
