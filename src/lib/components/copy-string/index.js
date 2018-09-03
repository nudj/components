/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^_" }] */

const React = require('react')
const copy = require('copy-to-clipboard')
const PropTypes = require('prop-types')

const InlineAction = require('../inline-action')
const CustomPropTypes = require('../../helpers/prop-types')

class CopyString extends React.Component {
  static defaultProps = {
    volume: 'murmur',
    onCopy: () => {},
    onBlur: () => {}
  }

  static PropTypes = {
    onCopy: PropTypes.func,
    onBlur: PropTypes.func,
    volume: PropTypes.oneOf(['scream', 'yell', 'shout', 'cheer', 'murmur']),
    children: CustomPropTypes.style.isRequired,
    string: PropTypes.string.isRequired
  }

  onClick = () => {
    const { string, onCopy } = this.props
    copy(string)
    onCopy()
  }

  render () {
    const {
      children,
      string: _string,
      onCopy: _onCopy,
      onBlur,
      volume,
      ...rest
    } = this.props

    return (
      <InlineAction
        {...rest}
        onBlur={onBlur}
        volume={volume}
        onClick={this.onClick}
        Component='button'
        type='button'
      >
        {children}
      </InlineAction>
    )
  }
}

module.exports = CopyString
