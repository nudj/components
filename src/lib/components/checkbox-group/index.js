// @flow
const React = require('react')
const uniqueId = require('lodash/uniqueId')

const { css } = require('../../css')
const Checkbox = require('../checkbox')

type ChildPropTypes = {
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

type CheckboxGroupPropTypes = {
  Input: React.ElementType,
  required?: boolean,
  checkboxStyleSheet: CheckboxClassList,
  children: Function => React.Node,
  onChange: HandlerArgs => mixed,
  values: Array<string>,
  styles?: Object,
  name: string
}

const CheckboxGroup = (props: CheckboxGroupPropTypes) => {
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
    <div className={css(styles)}>
      {children &&
        children((childProps: ChildPropTypes) => {
          const checked = values.includes(childProps.value)

          return (
            <Input
              id={uniqueId(name)}
              name={name}
              classNames={checkboxStyleSheet}
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
  required: false,
  checkboxStyleSheet: {}
}

module.exports = CheckboxGroup
