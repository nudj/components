const React = require('react')
const PropTypes = require('prop-types')

const { css } = require('../../css')
const styleSheet = require('./style.css')

const ScreenReadable = ({ children }) => (
  <span className={css(styleSheet.root)}>
    {children}
  </span>
)

ScreenReadable.propTypes = {
  children: PropTypes.node.isRequired
}

module.exports = ScreenReadable
