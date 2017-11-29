// @flow
const React = require('react')

const { mergeStyleSheets, css } = require('../../css')
const Icon = require('../icon')
const defaultStyleSheet = require('./style.css')

type StyleSheet = {
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
  styleSheet: StyleSheet,
  children: React.ChildrenArray<React.Element<'option'>>
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
    children
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

  const classNames = mergeStyleSheets(defaultStyleSheet, styleSheet)

  return (
    <div className={css(classNames.root)}>
      <select
        className={css(classNames.select)}
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
      <Icon name='chevron' styles={classNames.chevron} />
    </div>
  )
}

Select.defaultProps = {
  styleSheet: {},
  onChange: noopHandler,
  onBlur: noopHandler,
  onFocus: noopHandler
}

module.exports = Select
