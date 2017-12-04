// @flow
const React = require('react')

const { css } = require('../../css')
const stylesheet = require('./style.css')

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
  style: Object,
  onClick: Object => void,
  value?: string,
  Component: 'button'
}

const Button = (props: Props) => {
  const { volume, type, children, style, onClick, value } = props

  return (
    <button
      type={type}
      className={css(stylesheet.root, stylesheet[volume], style)}
      onClick={onClick}
      value={value}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  volume: 'murmur',
  type: 'button',
  onClick: () => {}
}

module.exports = Button
