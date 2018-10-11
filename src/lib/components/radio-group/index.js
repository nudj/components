const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css } = require('../../css')
const RadioButton = require('../radio-button')

const RadioGroup = props => {
  const {
    Input,
    required,
    radioButtonStyleSheet,
    children,
    value,
    name,
    onChange,
    styles,
    nonsensitive
  } = props

  const handleChange = ({
    value,
    preventDefault,
    stopPropagation
  }) => {
    onChange({
      name,
      value: value,
      preventDefault: preventDefault,
      stopPropagation: stopPropagation
    })
  }

  return (
    <div className={css(!nonsensitive && FS_HIDE_CLASS, styles)}>
      {children &&
        children(childProps => {
          const checked = value === childProps.value

          return (
            <Input
              name={name}
              styleSheet={radioButtonStyleSheet}
              value={childProps.value}
              label={childProps.label}
              onChange={handleChange}
              checked={checked}
              required={required}
              {...childProps}
            />
          )
        })}
    </div>
  )
}

RadioGroup.propTypes = {
  Input: CustomPropTypes.component,
  required: PropTypes.bool,
  radioButtonStyleSheet: PropTypes.shape({
    root: CustomPropTypes.style,
    radioButton: CustomPropTypes.style,
    wrapper: CustomPropTypes.style,
    label: CustomPropTypes.style
  }),
  children: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
  nonsensitive: PropTypes.bool
}

RadioGroup.defaultProps = {
  Input: RadioButton,
  values: [],
  required: false,
  radioButtonStyleSheet: {},
  nonsensitive: FS_SHOW
}

module.exports = RadioGroup
