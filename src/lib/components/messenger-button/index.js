const React = require('react')
const PropTypes = require('prop-types')
const memoize = require('memoize-one').default

const { StylePropType } = require('../../helpers/prop-types')
const defaultStyleSheet = require('./style.css')
const IconLink = require('../icon-link')

class MessengerButton extends React.Component {
  static defaultProps = {
    children: 'Share on Messenger',
    target: '_blank'
  }

  static propTypes = {
    link: PropTypes.string.isRequired,
    appId: PropTypes.string.isRequired,
    redirectUri: PropTypes.string.isRequired,
    children: PropTypes.node,
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
    mobile: PropTypes.bool,
    style: StylePropType
  }

  getStyle = memoize((defaultStyle, style) => [defaultStyle, style])

  render () {
    const {
      link,
      appId,
      redirectUri,
      children,
      target,
      mobile,
      style: externalStyle,
      ...rest
    } = this.props

    const shareUrl = mobile
      ? `fb-messenger://share/?link=${link}&app_id=${appId}`
      : `http://www.facebook.com/dialog/send?app_id=${appId}&link=${encodeURI(link)}&redirect_uri=${encodeURI(redirectUri)}`
    const style = this.getStyle(defaultStyleSheet.root, externalStyle)

    return (
      <IconLink
        {...rest}
        href={shareUrl}
        iconName='facebookMessenger'
        target={target}
        style={style}
      >
        {children}
      </IconLink>
    )
  }
}

module.exports = MessengerButton
