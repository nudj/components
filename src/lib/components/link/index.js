const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const defaultStyle = require('./style.css')
const { mergeStyle } = require('../../css')
const InlineAction = require('../inline-action')
const Icon = require('../icon')

const Link = props => {
  const {
    children,
    Component,
    href: intendedHref,
    inline,
    style,
    disabled,
    external,
    subtle,
    ...rest
  } = props
  const composedStyle = mergeStyle(inline ? defaultStyle.inline : null, style)

  const href = disabled ? '' : intendedHref

  return (
    <InlineAction
      {...rest}
      disabled={disabled}
      href={href}
      Component={Component}
      style={composedStyle}
      subtle={subtle}
    >
      {children}
      {subtle && external && (
        <Icon style={defaultStyle.externalIcon} name='externalLink' />
      )}
    </InlineAction>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  Component: CustomPropTypes.component,
  href: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  subtle: PropTypes.bool,
  style: CustomPropTypes.style
}

Link.defaultProps = {
  volume: 'murmur',
  Component: 'a',
  style: {}
}

module.exports = Link
