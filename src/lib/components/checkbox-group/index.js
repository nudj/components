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

type HandlerArgs = {
  name: string,
  values: Array<string>,
  preventDefault: Function,
  stopPropagation: Function
}

type CheckboxProps = {
  Input: React.ElementType,
  required?: boolean,
  className?: string,
  checkboxClassNames?: CheckboxClassList,
  children: React.ElementType => React.Node,
  onChange: HandlerArgs => mixed,
  values: Array<string>,
  name: string
}

const CheckboxGroup = (props: CheckboxProps) => {
  const {
    Input,
    required,
    className,
    checkboxClassNames,
    children,
    values,
    name,
    onChange
  } = props

  const defaultStyle: Object = getStyle()

  const handleChange = ({
    value,
    preventDefault,
    stopPropagation
  }: {
    value: string,
    preventDefault: Function,
    stopPropagation: Function
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
    <div className={classnames(defaultStyle.root, className)}>
      {children &&
        children((childProps: ChildType) => {
          const checked = values.includes(childProps.value)

          return (
            <Input
              id={uniqueId(name)}
              name={name}
              classNames={classnames(checkboxClassNames)}
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

CheckboxGroup.defaultProps = {
  Input: Checkbox,
  values: [],
  required: false
}

module.exports = CheckboxGroup
