// @Flow
const React = require('react')
const classnames = require('classnames')

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
  classNames?: classList
}

const InputField = (props: InputProps) => {
  const { classNames = {} } = props

  return (
    <div className={classnames(classNames.root)}>
      <label
        className={classnames(classNames.label)}
        id={props.id}
        htmlFor={props.htmlFor}
      >
        {props.label}
        <div className={classnames(classNames.requiredNotice)}>
          {props.required ? '(required)' : ''}
        </div>
      </label>
      {props.children}
    </div>
  )
}

module.exports = InputField
