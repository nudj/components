// @flow
const React = require('react')

const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')

type StyleSheetType = {
  root?: string,
  checkbox?: string,
  wrapper?: string,
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
        type='checkbox'
        name={name}
        value={value}
        className={css(style.root)}
        checked={checked}
        id={id}
        onChange={onChangeHandler}
      />
      <label htmlFor={id}>
        <svg
          className={css(style.checkbox)}
          width='1em'
          height='1em'
          viewBox='0 0 24 24'
        >
          <g transform='translate(3 4)' fill='none' fillRule='evenodd'>
            <rect
              stroke='#D5D5D3'
              strokeWidth={2}
              x={1}
              y={1}
              width={14}
              height={14}
              rx={4}
            />
            {checked ? (
              <path d='M8 12L3 7l2-2 3 3 8-8 2 2z' fill='#E35205' />
            ) : (
              ''
            )}
          </g>
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
