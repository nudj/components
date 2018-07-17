const React = require('react')
const ReactDOM = require('react-dom')
const memoize = require('memoize-one').default

const { css, mergeStyleSheets } = require('../../css')
const defaultListItemStyleSheet = require('./style.css')

const Checkbox = require('../checkbox')
const CheckboxGroup = require('../checkbox-group')

class CheckboxListItem extends React.Component {
  static defaultProps = {
    styleSheet: {},
    joined: true
  }

  handleChange = event => {
    const { onChange } = this.props

    onChange({
      name: event.name,
      value: event.value,
      checked: event.checked,
      preventDefault: event.preventDefault,
      stopPropagation: event.stopPropagation,
      indeterminate: false
    })
  }

  handleCheckboxContainerClick = event => {
    const {
      onChange,
      name,
      value,
      checked
    } = this.props

    const checkbox = this.checkbox
    const target = event.target

    if (!checkbox.contains(target)) {
      onChange({
        preventDefault: event.preventDefault,
        stopPropagation: event.stopPropagation,
        name: name,
        value: value,
        checked: !checked,
        indeterminate: false
      })
    }
  }

  getStyle = memoize(
    (defaultStyleSheet, styleSheet) => mergeStyleSheets(defaultStyleSheet, styleSheet)
  )

  render () {
    const {
      id,
      name,
      styleSheet,
      value,
      checked,
      required,
      children,
      joined,
      disabled
    } = this.props

    const listItemStyle = this.getStyle(defaultListItemStyleSheet, styleSheet)

    return (
      <div
        className={css(
          listItemStyle.root,
          joined ? listItemStyle.joined : listItemStyle.separate
        )}
      >
        <div
          className={css(
            listItemStyle.checkboxContainer,
            disabled && listItemStyle.checkboxDisabled,
          )}
          onClick={this.handleCheckboxContainerClick}
        >
          <Checkbox
            ref={c => { this.checkbox = ReactDOM.findDOMNode(c) }}
            id={id}
            name={name}
            value={value}
            onChange={this.handleChange}
            checked={checked}
            required={required}
            disabled={disabled}
          />
        </div>
        <div className={css(listItemStyle.childrenContainer)}>
          {children}
        </div>
      </div>
    )
  }
}

const ListMultiSelect = (props) => {
  const { joined, children, style, disabled, ...rest } = props

  return (
    <CheckboxGroup
      {...rest}
      Input={CheckboxListItem}
      styles={style}
    >
      {(childRender) => children((childProps) => childRender({
        ...childProps,
        joined,
        disabled
      }))}
    </CheckboxGroup>
  )
}

module.exports = ListMultiSelect
