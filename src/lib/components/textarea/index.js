// @flow
const React = require('react')
const ReactTextareaAutosize = require('react-textarea-autosize')

const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css, mergeStyleSheets } = require('../../css')
const defaultStylesheet = require('./style.css')

const TextareaAutosize = ReactTextareaAutosize.default || ReactTextareaAutosize

type StyleSheetType = {
  root?: string,
  error?: string,
  input?: string,
  inputError?: string
}

type HandlerArgs = {
  name: string,
  value: string,
  preventDefault: Function,
  stopPropagation: Function
}

type TextareaProps = {
  id: string,
  Wrapper: React.ElementType,
  ErrorWrapper: React.ElementType,
  onChange: HandlerArgs => mixed,
  onBlur: HandlerArgs => mixed,
  onFocus: HandlerArgs => mixed,
  error?: string,
  required?: boolean,
  name: string,
  styleSheet: StyleSheetType,
  placeholder?: string,
  value?: string,
  autosize?: boolean,
  rest?: Array<mixed>,
  nonsensitive?: boolean
}

const noopHandler = (args: HandlerArgs) => {}

const Textarea = (props: TextareaProps) => {
  const {
    id,
    name,
    required,
    placeholder,
    value,
    styleSheet,
    onChange,
    onBlur,
    onFocus,
    Wrapper,
    ErrorWrapper,
    error,
    autosize,
    nonsensitive,
    ...rest
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

  const style = mergeStyleSheets(defaultStylesheet, styleSheet)

  const errorSection = () => (
    <ErrorWrapper className={css(style.error)}>{error}</ErrorWrapper>
  )

  const InputComponent = autosize ? TextareaAutosize : 'textarea'

  if (autosize && (value == null || value === '')) {
    console.warn(
      'Initially rendering an autosizing textarea without a value will cause the element to render smaller than desired'
    )
  }

  return (
    <Wrapper className={css(style.root)}>
      <InputComponent
        {...rest}
        className={css(!nonsensitive && FS_HIDE_CLASS, style.input, error && style.inputError)}
        id={id}
        name={name}
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

Textarea.defaultProps = {
  styleSheet: {},
  onChange: noopHandler,
  onBlur: noopHandler,
  onFocus: noopHandler,
  Wrapper: 'div',
  ErrorWrapper: 'div',
  nonsensitive: FS_SHOW
}

module.exports = Textarea
