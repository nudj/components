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

const Button = ({
  volume,
  type,
  children,
  style,
  onClick,
  value,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
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
