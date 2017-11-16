// @Flow
const React = require('react')
const classnames = require('classnames')
const get = require('lodash/get')

type classList = {
  label?: string,
  requiredNotice?: string
}

type InputProps = {
  id?: string,
  className?: string,
  for?: string,
  label: string,
  required?: boolean,
  componentClasses?: classList
}

const InputField = (props: InputProps) => {
  const labelClass = get(props, 'componentClasses.label')
  const requiredNoticeClass = get(props, 'componentClasses.requiredNotice')

  return (
    <div className={classnames(props.className)}>
      <label
        className={classnames(labelClass)}
        id={props.id}
        htmlFor={props.for}
      >
        {props.label}
        <div className={classnames(requiredNoticeClass)}>
          {props.required ? '(required)' : ''}
        </div>
      </label>
      {props.children}
    </div>
  )
}

module.exports = InputField
