// @flow
const React = require('react')
const classnames = require('classnames')
const { merge } = require('@nudj/library')

const getStyle = require('./style.css')

type classList = {
  root?: string,
  label?: string,
  requiredNotice?: string,
  description?: string,
  inputContainer?: string
}

type InputProps = {
  id?: string,
  htmlFor?: string,
  label: string,
  required?: boolean,
  classNames?: classList,
  children: React.Node,
  description?: React.Node
}

const InputField = (props: InputProps) => {
  const { label, required, classNames, description } = props
  const defaultStyles = getStyle()
  const style = merge(defaultStyles, classNames)

  const requiredNotice = () => (
    <span className={classnames(style.requiredNotice)}>*</span>
  )

  const descriptionContainer = () => (
    <div className={classnames(style.description)}>{description}</div>
  )

  return (
    <div className={classnames(style.root)}>
      <label
        className={classnames(style.label)}
        id={props.id}
        htmlFor={props.htmlFor}
      >
        {label}
        {required ? requiredNotice() : null}
      </label>
      <div className={classnames(style.inputContainer)}>{props.children}</div>
      {description ? descriptionContainer() : null}
    </div>
  )
}

InputField.defaultProps = {
  classNames: {}
}

module.exports = InputField
