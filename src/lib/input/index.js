// @Flow
const React = require('react')

type InputProps = {
  id?: string,
  type?: string,
  className?: string,
  onChange?: Function,
  error?: string,
  required: boolean
}

const Input = (props: InputProps) => {
  const {
    required = false,
    onChange = () => {},
    type = 'text'
  } = props

  const handleChange = event => {
    return onChange(event, props.name, event.target.value)
  }

  const InputComponent = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div>
      <InputComponent
        className={props.className}
        id={props.id}
        name={props.name}
        onChange={handleChange}
        required={required}
      />
      {props.error ? <span>{props.error}</span> : null}
    </div>
  )
}

module.exports = Input
