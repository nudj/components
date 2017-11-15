// @Flow
const React = require('react')
const classnames = require('classnames')

type InputProps = {
  id?: string,
  type?: string,
  className?: string,
  wrapperClass?: string,
  onChange?: Function,
  error?: string,
  required: boolean
}

const Input = (props: InputProps) => {
  const {
    required = false,
    onChange = () => {},
    type = 'text',
    wrapperClass,
    className,
    error
  } = props

  const handleChange = event => {
    return onChange(event, props.name, event.target.value)
  }

  const InputComponent = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div className={classnames(wrapperClass)}>
      <InputComponent
        className={classnames(className)}
        id={props.id}
        name={props.name}
        onChange={handleChange}
        required={required}
      />
      {error ? <span>{error}</span> : null}
    </div>
  )
}

module.exports = Input
