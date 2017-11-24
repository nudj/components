// @flow
const React = require('react')
const classnames = require('classnames')

const getStyle = require('./style.css')

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
  className?: string
}

const Button = (props: Props) => {
  const { volume, type, children, className } = props
  const style: Object = getStyle()

  return (
    <button
      type={type}
      className={classnames(style.root, style[volume], className)}
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
