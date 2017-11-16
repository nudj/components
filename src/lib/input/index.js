// @Flow
const React = require('react')
const classnames = require('classnames')

type classList = {
  error?: string,
  wrapper?: string
}

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
  required?: boolean,
  componentClasses?: classList
}

const Input = (props: InputProps) => {
  const {
    required = false,
    componentClasses = {},
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    type = 'text',
    Wrapper = props => <div {...props} />,
    ErrorWrapper = props => <div {...props} />,
    error,
    className
  } = props

  const handleEvent = type => event => {
    const actions = { onChange, onBlur, onFocus }
    return actions[type](event, props.name, event.target.value)
  }

  const InputComponent = type === 'textarea' ? 'textarea' : 'input'

  return (
    <Wrapper className={classnames(componentClasses.wrapper)}>
      <InputComponent
        className={classnames(className)}
        id={props.id}
        name={props.name}
        onChange={handleEvent('onChange')}
        onBlur={handleEvent('onBlur')}
        onFocus={handleEvent('onFocus')}
        required={required}
      />
      <ErrorWrapper className={classnames(componentClasses.error)}>
        {error || ''}
      </ErrorWrapper>
    </Wrapper>
  )
}

module.exports = Input
