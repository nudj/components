// @flow
const React = require('react')
const classnames = require('classnames')

const { css, mergeStyleSheets } = require('../../css')
const defaultStyleSheet = require('./style.css')

type StyleSheet = {
  root?: Object,
  left?: Object,
  right?: Object,
  large?: Object
}

type AlignProps = {
  styleSheet: StyleSheet,
  primarySide: 'left' | 'right',
  leftChildren: React.Node,
  rightChildren: React.Node,
  rest?: Array<mixed>
}

const Align = (props: AlignProps) => {
  const {
    styleSheet,
    primarySide,
    leftChildren,
    rightChildren,
    ...rest
  } = props

  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

  const leftClasses = classnames(
    css(style.left),
    primarySide === 'left' ? css(style.large) : null
  )

  const rightClasses = classnames(
    css(style.right),
    primarySide === 'right' ? css(style.large) : null
  )

  return (
    <div {...rest} className={css(style.root)}>
      <div className={leftClasses}>{leftChildren}</div>
      <div className={rightClasses}>{rightChildren}</div>
    </div>
  )
}

Align.defaultProps = {
  primarySide: 'left',
  styleSheet: {}
}

module.exports = Align
