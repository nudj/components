// @flow
const React = require('react')

const { css, mergeStyleSheets } = require('../../css')
const defaultStylesheet = require('./style.css')

type StyleSheetType = {
  root?: Object,
  scream?: Object,
  yell?: Object,
  shout?: Object,
  cheer?: Object,
  murmur?: Object,
  whistle?: Object,
  whisper?: Object
}

type Props = {
  volume:
    | 'scream'
    | 'yell'
    | 'shout'
    | 'cheer'
    | 'murmur'
    | 'whistle'
    | 'whisper',
  type: 'submit' | 'reset' | 'button',
  children: React.Node,
  styleSheet: StyleSheetType
}

const Button = (props: Props) => {
  const { volume, type, children, styleSheet } = props
  const classNames = mergeStyleSheets(defaultStylesheet, styleSheet)

  return (
    <button type={type} className={css(classNames.root, classNames[volume])}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  volume: 'murmur',
  type: 'button',
  styleSheet: {}
}

module.exports = Button
