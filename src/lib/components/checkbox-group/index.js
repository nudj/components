// @flow
const React = require('react')
const classnames = require('classnames')
const uniqueId = require('lodash/uniqueId')

const Checkbox = require('../checkbox')
const getStyle = require('./style.css')

type ChildType = {
  value: string,
  label: string
}

type CheckboxClassList = {
  root?: string,
  checkbox?: string,
  wrapper?: string,
  label?: string
}

type CheckboxProps = {
  Input?: Function,
  required?: boolean,
  className?: string,
  checkboxClassNames?: CheckboxClassList,
  children: Function,
  onChange: Function,
  values: Array<string>,
  name: string
}

const CheckboxGroup = (props: CheckboxProps) => {
  const {
    Input = Checkbox,
    required = false,
    className,
    checkboxClassNames,
    children,
    values,
    name,
    onChange
  } = props

  const defaultStyle: Object = getStyle()

  return (
    <div className={classnames(defaultStyle.root, className)}>
      {children && children((childProps: ChildType) => {
        const checked = values.includes(childProps.value)

        return (
          <Input
            id={uniqueId()}
            name={name}
            classNames={classnames(checkboxClassNames)}
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
