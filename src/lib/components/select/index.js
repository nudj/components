// @flow
const React = require('react')

const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { mergeStyleSheets, css } = require('../../css')
const Icon = require('../icon')
const defaultStyleSheet = require('./style.css')

type StyleSheetType = {
  root?: string,
  select?: string,
  chevron?: string
}

type SelectProps = {
  id: string,
  name: string,
  value?: string,
  onChange: Function,
  onBlur: Function,
  onFocus: Function,
  required?: boolean,
  styleSheet: StyleSheetType,
  children: React.ChildrenArray<React.Element<'option'>>,
  nonsensitive?: boolean
}

type HandlerArgs = {
  name: string,
  value: string,
  preventDefault: Function,
  stopPropagation: Function
}

const noopHandler = (args: HandlerArgs) => {}

const Select = (props: SelectProps) => {
  const {
    id,
    name,
    required,
    value,
    styleSheet,
    onChange,
    onBlur,
    onFocus,
    children,
    nonsensitive
  } = props

  const handleEvent = type => event => {
    const actions = { onChange, onBlur, onFocus }
    return actions[type]({
      name: name,
      value: event.target.value,
      preventDefault: event.preventDefault,
      stopPropagation: event.stopPropagation
    })
  }

  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

  return (
    <div className={css(style.root)}>
      <select
        className={css(!nonsensitive && FS_HIDE_CLASS, style.select)}
        id={id}
        name={name}
        onChange={handleEvent('onChange')}
        onBlur={handleEvent('onBlur')}
        onFocus={handleEvent('onFocus')}
        required={required}
        value={value}
      >
        {children}
      </select>
      <Icon name='chevron' style={style.chevron} />
    </div>
  )
}

Select.defaultProps = {
  styleSheet: {},
  onChange: noopHandler,
  onBlur: noopHandler,
  onFocus: noopHandler,
  nonsensitive: FS_SHOW
}

module.exports = Select
