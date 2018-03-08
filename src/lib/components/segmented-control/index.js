const React = require('react')

const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')
const RadioGroup = require('../radio-group')

const Segment = props => {
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
    <Wrapper className={css(style.wrapper)}>
      <input
        type='radio'
        name={name}
        value={value}
        checked={checked}
        id={id}
        onChange={onChangeHandler}
        className={css(style.input)}
      />
      <label
        htmlFor={id}
        className={css(
          style.label,
          checked && style.labelChecked
        )}
      >
        {label}
      </label>
    </Wrapper>
  )
}

Segment.defaultProps = {
  styleSheet: {},
  Wrapper: 'div',
  onChange: () => {}
}

const SegmentedControl = props => <RadioGroup {...props} Input={Segment} />

module.exports = SegmentedControl
