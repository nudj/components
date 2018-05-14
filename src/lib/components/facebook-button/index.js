const React = require('react')
const PropTypes = require('prop-types')
const memoize = require('memoize-one').default

const { StylePropType } = require('../../helpers/prop-types')
const defaultStyleSheet = require('./style.css')
const IconLink = require('../icon-link')

class FacebookButton extends React.Component {
  static defaultProps = {
    children: 'Share on Facebook',
    target: '_blank'
  }

  static propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node,
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
    style: StylePropType
  }

  getStyle = memoize((defaultStyle, style) => [defaultStyle, style])

  render () {
    const {
      url,
      children,
      target,
      style: externalStyle,
      ...rest
    } = this.props

    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(url)}`
    const style = this.getStyle(defaultStyleSheet.root, externalStyle)

    return (
      <IconLink
        {...rest}
        href={shareUrl}
        iconName='facebook'
        target={target}
        style={style}
      >
        {children}
      </IconLink>
    )
  }
}

module.exports = FacebookButton
