const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { css, mergeStyleSheets } = require('../../css')
const Icon = require('../icon')
const ButtonContainer = require('../button-container')
const defaultStylesheet = require('./style.css')

const noopHandler = args => {}

class Input extends React.Component {
  static defaultProps = {
    type: 'text',
    value: '',
    styleSheet: {},
    onChange: noopHandler,
    onBlur: noopHandler,
    onFocus: noopHandler,
    onKeyDown: noopHandler,
    onKeyUp: noopHandler,
    Wrapper: 'div',
    ErrorWrapper: 'div',
    disabled: false,
    nonsensitive: FS_SHOW
  }

  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.oneOf(['text', 'textarea', 'email', 'password', 'search', 'url', 'number']),
    Wrapper: CustomPropTypes.component,
    ErrorWrapper: CustomPropTypes.component,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onClear: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    nonsensitive: PropTypes.bool,
    tabIndex: PropTypes.number,
    name: PropTypes.string,
    styleSheet: PropTypes.shape({
      root: PropTypes.object,
      error: PropTypes.object,
      input: PropTypes.object,
      inputError: PropTypes.object
    })
  }

  state = {
    hasFocus: false
  }

  focus = () => {
    if (this.input) {
      this.input.focus()
    }
    this.handleFocus()
  }

  blur = () => {
    if (this.input) {
      this.input.blur()
    }
    this.handleBlur()
  }

  handleChange = event => {
    const { onChange, name } = this.props
    onChange({
      name: name,
      value: event.target.value,
      preventDefault: event.preventDefault,
      stopPropagation: event.stopPropagation
    })
  }

  handleBlur = () => {
    const { onBlur } = this.props
    this.setState({ hasFocus: false })
    onBlur()
  }

  handleFocus = () => {
    const { onFocus } = this.props
    this.setState({ hasFocus: true })
    onFocus()
  }

  handleClear = event => {
    const { onClear } = this.props
    const clearable = typeof onClear === 'function'

    if (clearable) {
      event.preventDefault()
      this.focus()

      onClear({
        name: this.props.name,
        value: '',
        preventDefault: event.preventDefault,
        stopPropagation: event.stopPropagation
      })
    }
  }

  render () {
    const {
      id,
      name,
      type,
      required,
      placeholder,
      value,
      styleSheet,
      Wrapper,
      ErrorWrapper,
      error,
      onClear,
      onKeyDown,
      onKeyUp,
      tabIndex,
      disabled,
      nonsensitive
    } = this.props

    const clearable = typeof onClear === 'function'
    const style = mergeStyleSheets(defaultStylesheet, styleSheet)

    return (
      <Wrapper className={css(style.root)}>
        <div className={css(style.inputContainer)}>
          <input
            disabled={disabled}
            ref={c => {
              this.input = c
            }}
            className={css(
              !nonsensitive && FS_HIDE_CLASS,
              style.input,
              disabled && style.disabled,
              error && style.inputError,
              clearable && style.inputWithClear
            )}
            id={id}
            name={name}
            type={type}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            required={required}
            placeholder={placeholder}
            value={value}
            tabIndex={tabIndex}
          />
          {clearable && value && (
            <ButtonContainer
              style={style.clearButton}
              onClick={this.handleClear}
              tabIndex={tabIndex}
            >
              <Icon style={style.icon} name='close' />
            </ButtonContainer>
          )}
        </div>
        {error && (
          <ErrorWrapper className={css(style.error)}>{error}</ErrorWrapper>
        )}
      </Wrapper>
    )
  }
}

module.exports = Input
