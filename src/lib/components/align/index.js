const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css, mergeStyleSheets } = require('../../css')
const defaultStyleSheet = require('./style.css')

const Align = props => {
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

Align.propTypes = {
  styleSheet: PropTypes.shape({
    root: CustomPropTypes.style,
    left: CustomPropTypes.style,
    right: CustomPropTypes.style,
    large: CustomPropTypes.style
  }),
  primarySide: PropTypes.oneOf(['left', 'right']),
  leftChildren: PropTypes.node,
  nonsensitive: PropTypes.bool
}

Align.defaultProps = {
  primarySide: 'left',
  styleSheet: {},
  nonsensitive: FS_SHOW
}

module.exports = Align
