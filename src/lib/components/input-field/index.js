// @flow
const React = require('react')

const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')

type StyleSheetType = {
  root?: string,
  label?: string,
  requiredNotice?: string,
  description?: string,
  inputContainer?: string
}

type InputProps = {
  htmlFor?: string,
  label: string,
  required?: boolean,
  styleSheet: StyleSheetType,
  children: React.Node,
  description?: React.Node
}

const InputField = (props: InputProps) => {
  const { label, required, styleSheet, description, htmlFor, children } = props
  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

  const requiredNotice = () => (
    <span className={css(style.requiredNotice)}>*</span>
  )

  const descriptionContainer = () => (
    <div className={css(style.description)}>{description}</div>
  )

  return (
    <div className={css(style.root)}>
      <label className={css(style.label)} htmlFor={htmlFor}>
        {label}
        {required && requiredNotice()}
      </label>
      <div className={css(style.inputContainer)}>{children}</div>
      {description && descriptionContainer()}
    </div>
  )
}

InputField.defaultProps = {
  styleSheet: {}
}

module.exports = InputField
