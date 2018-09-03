const React = require('react')
const PropTypes = require('prop-types')

const Input = require('../input')
const { KEY_CODES } = require('../../constants')
const CustomPropTypes = require('../../helpers/prop-types')

const matchLeadingsZeroRegex = /^0(0*)/

const ADDITIONAL_VALID_KEYS = [
  KEY_CODES.BACKSPACE,
  KEY_CODES.DELETE,
  KEY_CODES.TAB,
  KEY_CODES.ESCAPE,
  KEY_CODES.ENTER
]

const VALID_WITH_CTRL = [
  KEY_CODES.A,
  KEY_CODES.C,
  KEY_CODES.V,
  KEY_CODES.X
]

/**
 * Inspired by https://stackoverflow.com/a/33251315
 */
const isValidKeyEvent = (event) => {
  if (
    ADDITIONAL_VALID_KEYS.includes(event.which) ||
    (VALID_WITH_CTRL.includes(event.which) && (event.ctrlKey === true || event.metaKey === true)) ||
    // Allow: home, end, left, right, down, up
    (event.which >= KEY_CODES.END && event.which <= KEY_CODES.DOWN)
  ) {
    return true
  }

  if (
    // Checks if `event.which` falls outside of the 'number' key code ranges
    (event.shiftKey || (event.which < KEY_CODES.ZERO || event.which > KEY_CODES.NINE)) &&
    (event.which < KEY_CODES.NUM_ZERO || event.which > KEY_CODES.NUM_NINE)
  ) {
    return false
  }

  return true
}

class IntegerInput extends React.Component {
  static defaultProps = {
    Component: Input,
    leadingZero: false,
    onKeyDown: () => {},
    onChange: () => {}
  }

  static propTypes = {
    Component: CustomPropTypes.component,
    leadingZero: PropTypes.bool,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string
  }

  handleKeyDown = event => {
    const { onKeyDown, leadingZero } = this.props
    const startsWithZero = event.target.value === '' && event.which === KEY_CODES.ZERO

    if ((!leadingZero && startsWithZero) || !isValidKeyEvent(event)) {
      event.preventDefault()
    }

    onKeyDown(event)
  }

  handleChange = event => {
    const { leadingZero, onChange } = this.props
    const value = leadingZero
      ? event.value
      : event.value.replace(matchLeadingsZeroRegex, '')

    onChange({ ...event, value })
  }

  render () {
    const { Component, ...props } = this.props

    return (
      <Component
        {...props}
        type='number'
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    )
  }
}

module.exports = IntegerInput
