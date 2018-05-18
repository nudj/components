// @flow
const React = require('react')

const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css, mergeStyleSheets } = require('../../css')
const Icon = require('../icon')
const ButtonContainer = require('../button-container')
const defaultStylesheet = require('./style.css')

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

type InputProps = {
  id: string,
  type: 'text' | 'email' | 'password' | 'search' | 'url',
  Wrapper: React.ElementType,
  ErrorWrapper: React.ElementType,
  onChange: HandlerArgs => mixed,
  onBlur: HandlerArgs => mixed,
  onFocus: HandlerArgs => mixed,
  onClear: HandlerArgs => mixed,
  error?: string,
  required?: boolean,
  name: string,
  styleSheet: StyleSheetType,
  placeholder?: string,
  value?: string,
  onClear?: HandlerArgs => mixed,
  nonsensitive?: boolean,
  tabIndex?: number
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
    styleSheet,
    onChange,
    onBlur,
    onFocus,
    Wrapper,
    ErrorWrapper,
    error,
    onClear,
    tabIndex,
    nonsensitive
  } = props

  const clearable = typeof onClear === 'function'
  // hack to prevent flow from complaining about `onClear` being optional
  let onClearHandler = onClear || (_ => {})

  const handleEvent = type => event => {
    const actions = { onChange, onBlur, onFocus }
    return actions[type]({
      name: name,
      value: event.target.value,
      preventDefault: event.preventDefault,
      stopPropagation: event.stopPropagation
    })
  }

  const handleClear = event => {
    if (clearable) {
      event.preventDefault()
      if (input != null) input.focus()

      onClearHandler({
        name: name,
        value: '',
        preventDefault: event.preventDefault,
        stopPropagation: event.stopPropagation
      })
    }
  }

  const style = mergeStyleSheets(defaultStylesheet, styleSheet)

  const errorSection = () => (
    <ErrorWrapper className={css(style.error)}>{error}</ErrorWrapper>
  )

  // ref
  let input = null

  return (
    <Wrapper className={css(style.root)}>
      <div className={css(style.inputContainer)}>
        <input
          ref={c => {
            input = c
          }}
          className={css(
            !nonsensitive && FS_HIDE_CLASS,
            style.input,
            error && style.inputError,
            clearable && style.inputWithClear
          )}
          id={id}
          name={name}
          type={type}
          onChange={handleEvent('onChange')}
          onBlur={handleEvent('onBlur')}
          onFocus={handleEvent('onFocus')}
          required={required}
          placeholder={placeholder}
          value={value}
          tabIndex={tabIndex}
        />
        {clearable &&
          value && (
            <ButtonContainer
              style={style.clearButton}
              onClick={handleClear}
              tabIndex={tabIndex}
            >
              <Icon style={style.icon} name='close' />
            </ButtonContainer>
          )}
      </div>
      {error ? errorSection() : null}
    </Wrapper>
  )
}

Input.defaultProps = {
  type: 'text',
  styleSheet: {},
  onChange: noopHandler,
  onBlur: noopHandler,
  onFocus: noopHandler,
  Wrapper: 'div',
  ErrorWrapper: 'div',
  nonsensitive: FS_SHOW
}

module.exports = Input
