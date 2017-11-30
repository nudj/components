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
  style: Object
}

const Button = (props: Props) => {
  const { volume, type, children, style } = props

  return (
    <button
      type={type}
      className={css(stylesheet.root, stylesheet[volume], style)}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  volume: 'murmur',
  type: 'button'
}

module.exports = Button
