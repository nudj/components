// @flow
const React = require('react')

const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
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
  rest?: Array<mixed>,
  fsShow?: boolean
}

const Align = (props: AlignProps) => {
  const {
    styleSheet,
    primarySide,
    leftChildren,
    rightChildren,
    fsShow,
    ...rest
  } = props

  const fsHide = !fsShow && FS_HIDE_CLASS
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

Align.defaultProps = {
  primarySide: 'left',
  styleSheet: {},
  fsShow: FS_SHOW
}

module.exports = Align
