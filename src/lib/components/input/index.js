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
  type?: 'text' | 'email' | 'password' | 'search' | 'url' | 'textarea',
  Wrapper?: Function,
  ErrorWrapper?: Function,
  onChange?: Function,
  onBlur?: Function,
  onFocus?: Function,
  error?: string,
  required?: boolean,
  name: string,
  classNames?: classList
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
    required = false,
    classNames = {},
    onChange = noopHandler,
    onBlur = noopHandler,
    onFocus = noopHandler,
    type = 'text',
    Wrapper = props => <div {...props} />,
    ErrorWrapper = props => <div {...props} />,
    name,
    error
  } = props

  const handleEvent = type => event => {
    const actions = { onChange, onBlur, onFocus }
    return actions[type]({
      name,
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
    <Wrapper className={classnames(styles.wrapper)}>
      <InputComponent
        className={classnames(styles.root)}
        id={props.id}
        name={name}
        type={type}
        onChange={handleEvent('onChange')}
        onBlur={handleEvent('onBlur')}
        onFocus={handleEvent('onFocus')}
        required={required}
      />
      {error ? errorSection() : null}
    </Wrapper>
  )
}

module.exports = Input
