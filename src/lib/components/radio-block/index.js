const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')

const RadioBlock = (props) => {
  const {
    styleSheet,
    label,
    Wrapper,
    checked,
    onChange,
    name,
    value,
    id,
    disabled,
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
    <Wrapper
      className={css(
        style.wrapper,
        checked ? style.checked : null
      )}
    >
      <input
        type='radio'
        name={name}
        value={value}
        className={css(style.input)}
        checked={checked}
        id={id}
        onChange={onChangeHandler}
        disabled={disabled}
      />
      <label htmlFor={id} className={css(!nonsensitive && FS_HIDE_CLASS, style.label)}>
        {label}
      </label>
    </Wrapper>
  )
}

RadioBlock.defaultProps = {
  styleSheet: {},
  Wrapper: 'div',
  onChange: () => {},
  nonsensitive: FS_SHOW
}

RadioBlock.propTypes = {
  styleSheet: PropTypes.objectOf(CustomPropTypes.style),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.node,
  nonsensitive: PropTypes.bool
}

module.exports = RadioBlock
