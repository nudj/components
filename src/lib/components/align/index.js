// @flow
const React = require('react')

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
  const leftClasses = css(style.left, primarySide === 'left' && style.large)
  const rightClasses = css(style.right, primarySide === 'right' && style.large)

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
