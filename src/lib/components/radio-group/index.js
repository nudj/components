// @flow
const React = require('react')

const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css } = require('../../css')
const RadioButton = require('../radio-button')

type ChildPropTypes = {
  value: string,
  label: string
}

type RadioButtonClassList = {
  root?: string,
  radioButton?: string,
  wrapper?: string,
  label?: string
}

type HandlerArgs = {
  name: string,
  value: string,
  preventDefault: Function,
  stopPropagation: Function
}

type RadioGroupPropTypes = {
  Input: React.ElementType,
  required?: boolean,
  radioButtonStyleSheet: RadioButtonClassList,
  children: Function => React.Node,
  onChange: HandlerArgs => mixed,
  value: string,
  styles?: Object,
  name: string,
  nonSensitive?: boolean
}

const RadioGroup = (props: RadioGroupPropTypes) => {
  const {
    Input,
    required,
    radioButtonStyleSheet,
    children,
    value,
    name,
    onChange,
    styles,
    nonSensitive
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
    onChange({
      name,
      value: value,
      preventDefault: preventDefault,
      stopPropagation: stopPropagation
    })
  }

  return (
    <div className={css(!nonSensitive && FS_HIDE_CLASS, styles)}>
      {children &&
        children((childProps: ChildPropTypes) => {
          const checked = value === childProps.value

          return (
            <Input
              name={name}
              classNames={radioButtonStyleSheet}
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

RadioGroup.defaultProps = {
  Input: RadioButton,
  values: [],
  required: false,
  radioButtonStyleSheet: {},
  nonSensitive: FS_SHOW
}

module.exports = RadioGroup
