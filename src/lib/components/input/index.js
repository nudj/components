// @flow
const React = require('react')
const classnames = require('classnames')
const { merge } = require('@nudj/library')

const getStyle = require('./style.css')

type classList = {
  root?: string,
  error?: string,
  wrapper?: string
}

type InputProps = {
  id: string,
  type: 'text' | 'email' | 'password' | 'search' | 'url' | 'textarea',
  Wrapper: Function,
  ErrorWrapper: Function,
  onChange: Function,
  onBlur: Function,
  onFocus: Function,
  error?: string,
  required?: boolean,
  name: string,
  classNames?: classList,
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
const emptyComponent = props => <div {...props} />

const Input = (props: InputProps) => {
  const {
    id,
    name,
    type,
    required,
    placeholder,
    value,
    classNames,
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

  const defaultStyles = getStyle()
  const styles = merge(defaultStyles, classNames)
  const InputComponent = type === 'textarea' ? 'textarea' : 'input'

  const errorSection = () => (
    <ErrorWrapper className={classnames(styles.error)}>{error}</ErrorWrapper>
  )

  return (
    <Wrapper className={classnames(styles.root)}>
      <InputComponent
        className={classnames(styles.input, error ? styles.inputError : null)}
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
  classNames: {},
  onChange: noopHandler,
  onBlur: noopHandler,
  onFocus: noopHandler,
  Wrapper: emptyComponent,
  ErrorWrapper: emptyComponent
}

module.exports = Input
