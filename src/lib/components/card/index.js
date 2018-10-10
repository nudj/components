const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { css } = require('../../css')
const styleSheet = require('./style.css')

const Card = ({ children, style }) => (
  <div className={css(styleSheet.root, style)}>{children}</div>
)

Card.propTypes = {
  children: PropTypes.node,
  style: CustomPropTypes.style
}

module.exports = Card
