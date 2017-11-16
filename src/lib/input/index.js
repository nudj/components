// @Flow
const React = require('react')
const classnames = require('classnames')
const getStyle = require('./style.css')

const { merge } = require('@nudj/library')

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

  const defaultStyles = getStyle()
  const styles = merge(defaultStyles, classNames)
  const InputComponent = type === 'textarea' ? 'textarea' : 'input'

  return (
    <Wrapper className={classnames(styles.wrapper)}>
      <InputComponent
        className={classnames(styles.root)}
        id={props.id}
        name={props.name}
        type={type}
        onChange={handleEvent('onChange')}
        onBlur={handleEvent('onBlur')}
        onFocus={handleEvent('onFocus')}
        required={required}
      />
      <ErrorWrapper className={classnames(styles.error)}>
        {error}
      </ErrorWrapper>
    </Wrapper>
  )
}

module.exports = Input
