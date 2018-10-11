const React = require('react')
const ReactTextareaAutosize = require('react-textarea-autosize')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css, mergeStyleSheets } = require('../../css')
const defaultStylesheet = require('./style.css')

const TextareaAutosize = ReactTextareaAutosize.default || ReactTextareaAutosize

const noopHandler = args => {}

const Textarea = props => {
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

Textarea.propTypes = {
  id: PropTypes.string,
  Wrapper: CustomPropTypes.component,
  ErrorWrapper: CustomPropTypes.component,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  styleSheet: PropTypes.shape({
    root: PropTypes.object,
    error: PropTypes.object,
    input: PropTypes.object,
    inputError: PropTypes.object
  }),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  autosize: PropTypes.bool,
  rest: PropTypes.array,
  nonsensitive: PropTypes.bool
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
