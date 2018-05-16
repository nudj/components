// @flow
const React = require('react')
const copy = require('copy-to-clipboard')

const InlineAction = require('../inline-action')

type Props = {
  type?: 'submit' | 'reset' | 'button',
  value?: string,
  children: React.Node,
  Component: React.ElementType,
  text: string,
  onCopy: () => void,
  rest?: Array<mixed>
}

const CopyString = (props: Props) => {
  const { children, type, text, onCopy, Component, ...rest } = props

  const onClick = () => {
    copy(text)
    onCopy()
  }

  return (
    <InlineAction
      {...rest}
      onClick={onClick}
      type={type}
      Component={Component}
    >
      {children}
    </InlineAction>
  )
}

CopyString.defaultProps = {
  volume: 'murmur',
  onCopy: () => {},
  Component: 'button',
  type: 'button'
}

module.exports = CopyString
