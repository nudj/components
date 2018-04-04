const React = require('react')

const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')

const SelectablePill = (props) => {
  const {
    styleSheet,
    label,
    Wrapper,
    checked,
    onChange,
    name,
    value,
    id,
    disabled
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
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className={css(
          style.labelContainer,
          checked && style.labelContainerChecked,
          disabled && style.labelContainerDisabled,
          checked && disabled && style.labelContainerCheckedDisabled
        )}
      >
        <span className={css(style.label)}>
          {label}
        </span>
        <svg className={css(style.icon)} viewBox='0 0 24 24'>
          <g transform='translate(3 4)' fill='none' fillRule='evenodd'>
            <rect
              className={css(
                style.iconBox,
                checked && style.iconBoxChecked
              )}
              x={1}
              y={1}
              width={14}
              height={14}
              rx={4}
            />
            <path
              className={css(
                style.iconCheckmark,
                checked
                  ? style.iconCheckmarkChecked
                  : style.iconCheckmarkUnchecked
              )}
              d='M8 12L3 7l2-2 3 3 8-8 2 2z'
            />
          </g>
        </svg>
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
