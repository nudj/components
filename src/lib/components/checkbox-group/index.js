// @flow
const React = require('react')
const Checkbox = (props) => <input type='checkbox' {...props} /> // require('../checkbox')
const uniqueId = require('lodash/uniqueId')

type ChildType = {
  value: string,
  label: string
}

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
      {children && children((childProps: ChildType) => {
        const checked = values.includes(childProps.value)

        return (
          <Input
            id={uniqueId()}
            name={name}
            value={childProps.value}
            label={childProps.label}
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
