const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')

const RadioButton = props => {
  const {
    styleSheet,
    label,
    Wrapper,
    checked,
    onChange,
    name,
    value,
    id,
    nonsensitive
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
        <span className={css(!nonsensitive && FS_HIDE_CLASS, style.label)}>{label}</span>
      </label>
    </Wrapper>
  )
}

RadioButton.propTypes = {
  styleSheet: PropTypes.shape({
    root: PropTypes.string,
    input: PropTypes.string,
    labelContainer: PropTypes.string,
    icon: PropTypes.string,
    iconBox: PropTypes.string,
    iconCheckmark: PropTypes.string,
    iconCheckmarkUnchecked: PropTypes.string,
    iconCheckmarkChecked: PropTypes.string,
    label: PropTypes.string
  }),
  checked: PropTypes.bool,
  Wrapper: CustomPropTypes.component,
  onChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  nonsensitive: PropTypes.bool
}

RadioButton.defaultProps = {
  styleSheet: {},
  Wrapper: 'div',
  nonsensitive: FS_SHOW
}

module.exports = RadioButton
