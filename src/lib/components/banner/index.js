const PropTypes = require('prop-types')
const React = require('react')

const styleSheet = require('./style.css')
const { css } = require('../../css')
const { ComponentPropType } = require('../../helpers/prop-types')

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
  children: ComponentPropType.isRequired
}

module.exports = Banner
