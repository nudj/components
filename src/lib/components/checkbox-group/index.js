const React = require('react')
const PropTypes = require('prop-types')
const CustomPropTypes = require('../../helpers/prop-types')
const { css } = require('../../css')
const Checkbox = require('../checkbox')

const CheckboxGroup = props => {
  const {
    Input,
    required,
    checkboxStyleSheet,
    children,
    values,
    name,
    onChange,
    styles
  } = props

  const handleChange = ({
    value,
    preventDefault,
    stopPropagation
  }) => {
    let newValues

    if (values.includes(value)) {
      newValues = values.filter(val => val !== value)
    } else {
      newValues = [...values, value]
    }

    onChange({
      name,
      values: newValues,
      preventDefault: preventDefault,
      stopPropagation: stopPropagation
    })
  }

  return (
    <div className={css(styles)}>
      {children &&
        children((childProps) => {
          const checked = values.includes(childProps.value)

          return (
            <Input
              name={name}
              styleSheet={checkboxStyleSheet}
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

CheckboxGroup.propTypes = {
  Input: CustomPropTypes.component,
  required: PropTypes.bool,
  checkboxStyleSheet: PropTypes.shape({
    root: PropTypes.string,
    checkbox: PropTypes.string,
    wrapper: PropTypes.string,
    label: PropTypes.string
  }),
  children: PropTypes.func,
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object,
  name: PropTypes.string
}

CheckboxGroup.defaultProps = {
  Input: Checkbox,
  values: [],
  required: false,
  checkboxStyleSheet: {}
}

module.exports = CheckboxGroup
