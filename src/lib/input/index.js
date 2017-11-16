// @Flow
const React = require('react')
const classnames = require('classnames')

type classList = {
  root?: string,
  error?: string,
  wrapper?: string
}

type InputProps = {
  id?: string,
  type?: string,
  wrapperClass?: string,
  Wrapper?: Function,
  onChange?: Function,
  onBlur?: Function,
  onFocus?: Function,
  error?: string,
  required?: boolean,
  classNames?: classList
}

const Input = (props: InputProps) => {
  const {
    required = false,
    classNames = {},
    onChange = () => {},
    onBlur = () => {},
    onFocus = () => {},
    type = 'text',
    Wrapper = props => <div {...props} />,
    ErrorWrapper = props => <div {...props} />,
    error = ''
  } = props

  const handleEvent = type => event => {
    const actions = { onChange, onBlur, onFocus }
    return actions[type](event, props.name, event.target.value)
  }

  const InputComponent = type === 'textarea' ? 'textarea' : 'input'

  return (
    <Wrapper className={classnames(classNames.wrapper)}>
      <InputComponent
        className={classnames(classNames.root)}
        id={props.id}
        name={props.name}
        type={type}
        onChange={handleEvent('onChange')}
        onBlur={handleEvent('onBlur')}
        onFocus={handleEvent('onFocus')}
        required={required}
      />
      <ErrorWrapper className={classnames(classNames.error)}>
        {error}
      </ErrorWrapper>
    </Wrapper>
  )
}
// button, checkbox, email, file, password, radio,
module.exports = Input
