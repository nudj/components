const React = require('react')

const CustomPropTypes = require('../../helpers/prop-types')
const { css } = require('../../css')
const styleSheet = require('./style.css')

const Loader = ({ style }) => (
  <div className={css(styleSheet.spinner, style)} />
)

Loader.propTypes = {
  style: CustomPropTypes.style
}

module.exports = Loader
