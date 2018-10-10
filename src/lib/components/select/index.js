const React = require('react')
const PropTypes = require('prop-types')

const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { mergeStyleSheets, css } = require('../../css')
const Icon = require('../icon')
const defaultStyleSheet = require('./style.css')

const noopHandler = args => {}

const Select = props => {
  const {
    id,
    name,
    required,
    value,
    styleSheet,
    onChange,
    onBlur,
    onFocus,
    children,
    nonsensitive
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

  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

  return (
    <div className={css(style.root)}>
      <select
        className={css(!nonsensitive && FS_HIDE_CLASS, style.select)}
        id={id}
        name={name}
        onChange={handleEvent('onChange')}
        onBlur={handleEvent('onBlur')}
        onFocus={handleEvent('onFocus')}
        required={required}
        value={value}
      >
        {children}
      </select>
      <Icon name='chevron' style={style.chevron} />
    </div>
  )
}

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
  styleSheet: PropTypes.shape({
    root: PropTypes.string,
    select: PropTypes.string,
    chevron: PropTypes.string
  }),
  children: PropTypes.object,
  nonsensitive: PropTypes.bool
}

Select.defaultProps = {
  styleSheet: {},
  onChange: noopHandler,
  onBlur: noopHandler,
  onFocus: noopHandler,
  nonsensitive: FS_SHOW
}

module.exports = Select
