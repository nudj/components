// @flow
const React = require('react')
const classnames = require('classnames')

const getStyle = require('./style.css')
const { merge } = require('@nudj/library')

type classList = {
  root: string,
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

  return (
    <div className={classnames(style.root)}>
      <label
        className={classnames(style.label)}
        id={props.id}
        htmlFor={props.htmlFor}
      >
        {props.label}
        <div className={classnames(style.requiredNotice)}>
          {props.required ? '(required)' : ''}
        </div>
      </label>
      {props.children}
    </div>
  )
}

module.exports = InputField
