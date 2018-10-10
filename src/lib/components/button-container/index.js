const React = require('react')
const PropTypes = require('prop-types')
const CustomPropTypes = require('../../helpers/prop-types')
const { css } = require('../../css')
const defaultStyleSheet = require('./style.css')

const ButtonContainer = ({
  style,
  children,
  type,
  ...rest
}) => (
  <button {...rest} type={type} className={css(defaultStyleSheet.root, style)}>
    {children}
  </button>
)

ButtonContainer.propTypes = {
  style: CustomPropTypes.style,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  children: PropTypes.node.isRequired
}

ButtonContainer.defaultProps = {
  style: {},
  type: 'button'
}

module.exports = ButtonContainer
