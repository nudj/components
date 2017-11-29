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
  styles: Object
}

const Button = (props: Props) => {
  const { volume, type, children, styles } = props

  return (
    <button
      type={type}
      className={css(stylesheet.root, stylesheet[volume], styles)}
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
