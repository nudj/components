// @flow
const React = require('react')

const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')

type StyleSheet = {
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
  styleSheet: StyleSheet,
  children: React.Node,
  description?: React.Node
}

const InputField = (props: InputProps) => {
  const { label, required, styleSheet, description, htmlFor, children } = props
  const classNames = mergeStyleSheets(defaultStyleSheet, styleSheet)

  const requiredNotice = () => (
    <span className={css(classNames.requiredNotice)}>*</span>
  )

  const descriptionContainer = () => (
    <div className={css(classNames.description)}>{description}</div>
  )

  return (
    <div className={css(classNames.root)}>
      <label className={css(classNames.label)} htmlFor={htmlFor}>
        {label}
        {required && requiredNotice()}
      </label>
      <div className={css(classNames.inputContainer)}>{children}</div>
      {description && descriptionContainer()}
    </div>
  )
}

InputField.defaultProps = {
  styleSheet: {}
}

module.exports = InputField
