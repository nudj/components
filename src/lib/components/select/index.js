// @flow
const React = require('react')
const classnames = require('classnames')
const { merge } = require('@nudj/library')

const Icon = require('../icon')
const getStyle = require('./style.css')

type classList = {
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
  classNames: classList,
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
    classNames,
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

  const defaultStyles = getStyle()
  const styles = merge(defaultStyles, classNames)

  return (
    <div className={styles.root}>
      <select
        className={classnames(styles.select)}
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
      <Icon name='chevron' className={styles.chevron} />
    </div>
  )
}

Select.defaultProps = {
  classNames: {},
  onChange: noopHandler,
  onBlur: noopHandler,
  onFocus: noopHandler
}

module.exports = Select
