// @flow
console.log('c', 21)
const React = require('react')
console.log('c', 22)

const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
console.log('c', 23)
const { css, mergeStyleSheets } = require('../../css')
console.log('c', 24)
const defaultStyleSheet = require('./style.css')
console.log('c', 25)

type StyleSheet = {
  root?: Object,
  left?: Object,
  right?: Object,
  large?: Object
}
console.log('c', 26)

type AlignProps = {
  styleSheet: StyleSheet,
  primarySide: 'left' | 'right',
  leftChildren: React.Node,
  rightChildren: React.Node,
  rest?: Array<mixed>,
  nonsensitive?: boolean
}
console.log('c', 27)

const Align = (props: AlignProps) => {
  const {
    styleSheet,
    primarySide,
    leftChildren,
    rightChildren,
    nonsensitive,
    ...rest
  } = props

  const fsHide = !nonsensitive && FS_HIDE_CLASS
  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)
  const leftClasses = css(fsHide, style.left, primarySide === 'left' && style.large)
  const rightClasses = css(fsHide, style.right, primarySide === 'right' && style.large)

  return (
    <div {...rest} className={css(style.root)}>
      <div className={leftClasses}>{leftChildren}</div>
      <div className={rightClasses}>{rightChildren}</div>
    </div>
  )
}
console.log('c', 28)

Align.defaultProps = {
  primarySide: 'left',
  styleSheet: {},
  nonsensitive: FS_SHOW
}
console.log('c', 29)

module.exports = Align
console.log('c', 210)
