const PropTypes = require('prop-types')
const React = require('react')

const styleSheet = require('./style.css')
const { css } = require('../../css')

const Banner = props => {
  const { children, style, context, ...rest } = props

  return (
    <div {...rest} className={css(styleSheet.root, styleSheet[context], style)}>
      {children}
    </div>
  )
}

Banner.defaultProps = {
  context: 'default'
}

Banner.propTypes = {
  context: PropTypes.oneOf(['success', 'error', 'default']),
  children: PropTypes.node.isRequired
}

module.exports = Banner
