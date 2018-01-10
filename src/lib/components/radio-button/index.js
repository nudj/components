// @flow
const React = require('react')

const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')

type StyleSheetType = {
  root?: string,
  input?: string,
  labelContainer?: string,
  icon?: string,
  iconBox?: string,
  iconCheckmark?: string,
  iconCheckmarkUnchecked?: string,
  iconCheckmarkChecked?: string,
  label?: string
}

type HandlerArgs = {
  name: string,
  value: string,
  checked: boolean,
  preventDefault: Function,
  stopPropagation: Function
}

type CheckboxProps = {
  styleSheet: StyleSheetType,
  checked: boolean,
  Wrapper: React.ElementType,
  onChange: HandlerArgs => mixed,
  id: string,
  name: string,
  value: string,
  label: string
}

const Checkbox = (props: CheckboxProps) => {
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
        className={css(style.input)}
        checked={checked}
        id={id}
        onChange={onChangeHandler}
      />
      <label htmlFor={id} className={css(style.labelContainer)}>
        <svg className={css(style.icon)} viewBox='0 0 24 24'>
          <rect
            className={css(style.iconCircle)}
            x='5' y='5' width='14' height='14' rx='7'
          />
          <circle
            className={css(
              style.iconDot,
              checked ? style.iconDotChecked : style.iconDotUnchecked
            )}
            cx='12'
            cy='12'
            r='4'
          />
        </svg>
        <span className={css(style.label)}>{label}</span>
      </label>
    </Wrapper>
  )
}

Checkbox.defaultProps = {
  styleSheet: {},
  Wrapper: 'div'
}

module.exports = Checkbox
