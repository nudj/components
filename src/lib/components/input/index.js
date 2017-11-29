// @flow
const React = require('react')

const { css, mergeStyleSheets } = require('../../css')
const defaultStylesheet = require('./style.css')

type classList = {
  root?: string,
  error?: string,
  input?: string,
  inputError?: string
}

type InputProps = {
  id: string,
  type: 'text' | 'email' | 'password' | 'search' | 'url' | 'textarea',
  Wrapper: React.ElementType,
  ErrorWrapper: React.ElementType,
  onChange: Function,
  onBlur: Function,
  onFocus: Function,
  error?: string,
  required?: boolean,
  name: string,
  stylesheet: classList,
  placeholder?: string,
  value?: string
}

type HandlerArgs = {
  name: string,
  value: string,
  preventDefault: Function,
  stopPropagation: Function
}

const noopHandler = (args: HandlerArgs) => {}

const Input = (props: InputProps) => {
  const {
    id,
    name,
    type,
    required,
    placeholder,
    value,
    stylesheet,
    onChange,
    onBlur,
    onFocus,
    Wrapper,
    ErrorWrapper,
    error
  } = props

  const handleEvent = type => event => {
    const actions = { onChange, onBlur, onFocus }
    return actions[type]({
      name: name,
      value: event.target.value,
      preventDefault: event.preventDefault,
      stopPropagation: event.stopPropagation
    })
  }

  const InputComponent = type === 'textarea' ? 'textarea' : 'input'
  const classNames = mergeStyleSheets(defaultStylesheet, stylesheet)

  const errorSection = () => (
    <ErrorWrapper className={css(classNames.error)}>{error}</ErrorWrapper>
  )

  return (
    <Wrapper className={css(classNames.root)}>
      <InputComponent
        className={css(classNames.input, error && classNames.inputError)}
        id={id}
        name={name}
        type={type}
        onChange={handleEvent('onChange')}
        onBlur={handleEvent('onBlur')}
        onFocus={handleEvent('onFocus')}
        required={required}
        placeholder={placeholder}
        value={value}
      />
      {error ? errorSection() : null}
    </Wrapper>
  )
}

Input.defaultProps = {
  type: 'text',
  stylesheet: {},
  onChange: noopHandler,
  onBlur: noopHandler,
  onFocus: noopHandler,
  Wrapper: 'div',
  ErrorWrapper: 'div'
}

module.exports = Input
