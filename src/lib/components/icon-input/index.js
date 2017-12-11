// @flow
const React = require('react')

const { css, mergeStyleSheets } = require('../../css')
const defaultStyleSheet = require('./style.css')
const Icon = require('../icon')
const Input = require('../input')

type StyleSheet = {
  root?: Object,
  icon?: Object,
  input?: Object
}

type Props = {
  styleSheet: StyleSheet,
  inputStyleSheet: Object,
  iconName: string,
  id: string,
  name: string,
  rest?: Array<mixed>
}

const IconInput = ({
  styleSheet,
  iconName,
  id,
  inputStyleSheet,
  name,
  ...rest
}: Props) => {
  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)
  const inputStyle = mergeStyleSheets({ input: style.input }, inputStyleSheet)

  return (
    <div className={css(style.root)}>
      <Icon style={style.icon} name={iconName} />
      <Input {...rest} name={name} id={id} styleSheet={inputStyle} />
    </div>
  )
}

IconInput.defaultProps = {
  styleSheet: {},
  inputStyleSheet: {}
}

module.exports = IconInput
