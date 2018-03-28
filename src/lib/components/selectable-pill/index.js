const React = require('react')

const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')
const Icon = require('../icon')

const SelectablePill = (props) => {
  const {
    styleSheet,
    label,
    Wrapper,
    checked,
    onChange,
    name,
    value,
    id
  } = props

  const onChangeHandler = event => {
    return onChange({
      name: event.target.name,
      value: event.target.value,
      checked: event.target.checked,
      preventDefault: event.preventDefault,
      stopPropagation: event.stopPropagation
    })
  }

  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

  return (
    <Wrapper className={css(style.root)}>
      <input
        type='checkbox'
        name={name}
        value={value}
        className={css(style.input)}
        checked={checked}
        id={id}
        onChange={onChangeHandler}
      />
      <label
        htmlFor={id}
        className={css(
          style.label,
          checked && style.labelChecked
        )}
      >
        {label}
        {checked
          ? <Icon name='closeButton' style={style.icon} />
          : <Icon name='circle' style={style.icon} />
        }
      </label>
    </Wrapper>
  )
}

SelectablePill.defaultProps = {
  styleSheet: {},
  Wrapper: 'div',
  onChange: () => {}
}

module.exports = SelectablePill
