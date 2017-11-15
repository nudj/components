// @Flow
const React = require('react')
const classnames = require('classnames')

type InputProps = {
  id?: string,
  type?: string,
  className?: string,
  wrapperClass?: string,
  Wrapper?: Function,
  onChange?: Function,
  onBlur?: Function,
  onFocus?: Function,
  error?: string,
  required: boolean
}

const Input = (props: InputProps) => {
  const {
    required = false,
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    type = 'text',
    Wrapper = props => <div {...props} />,
    wrapperClass,
    ErrorWrapper = props => <div {...props} />,
    error,
    errorClass,
    className
  } = props

  const handleEvent = type => event => {
    const actions = { onChange, onBlur, onFocus }
    return actions[type](event, props.name, event.target.value)
  }

  const InputComponent = type === 'textarea' ? 'textarea' : 'input'

  return (
    <Wrapper className={classnames(wrapperClass)}>
      <InputComponent
        className={classnames(className)}
        id={props.id}
        name={props.name}
        onChange={handleEvent('onChange')}
        onBlur={handleEvent('onBlur')}
        onFocus={handleEvent('onFocus')}
        required={required}
      />
      <ErrorWrapper className={classnames(errorClass)}>
        {error || ''}
      </ErrorWrapper>
    </Wrapper>
  )
}

module.exports = Input
