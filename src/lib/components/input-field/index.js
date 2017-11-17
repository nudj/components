// @flow
const React = require('react')
const classnames = require('classnames')
const { merge } = require('@nudj/library')

const getStyle = require('./style.css')

type classList = {
  root?: string,
  label?: string,
  requiredNotice?: string
}

type InputProps = {
  id?: string,
  htmlFor?: string,
  label: string,
  required?: boolean,
  classNames?: classList,
  children: React.Node
}

const InputField = (props: InputProps) => {
  const { classNames = {} } = props
  const defaultStyles = getStyle()
  const style = merge(defaultStyles, classNames)

  const requiredNotice = (
    <span className={classnames(style.requiredNotice)}>(required)</span>
  )

  return (
    <div className={classnames(style.root)}>
      <label
        className={classnames(style.label)}
        id={props.id}
        htmlFor={props.htmlFor}
      >
        {props.label}
        {props.required ? requiredNotice : null}
      </label>
      {props.children}
    </div>
  )
}

module.exports = InputField
