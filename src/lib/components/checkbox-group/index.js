// @flow
const React = require('react')
const Checkbox = (props) => <input type='checkbox' {...props} /> // require('../checkbox')
const uniqueId = require('lodash/uniqueId')

type CheckboxProps = {
  Input?: Function,
  required?: boolean,
  className?: string,
  children: Function,
  onChange: Function,
  values: Array<string>,
  name: string
}

const CheckboxGroup = (props: CheckboxProps) => {
  const {
    children,
    Input = Checkbox,
    required = false,
    values,
    name,
    className,
    onChange
  } = props

  return (
    <div className={className}>
      {children && children((childProps) => {
        const checked = values.includes(childProps.value)

        return (
          <Input
            id={uniqueId()}
            name={name}
            onChange={onChange}
            checked={checked}
            required={required}
            {...childProps}
          />
        )
      }) }
    </div>
  )
}

module.exports = CheckboxGroup
