const React = require('react')
const PropTypes = require('prop-types')
const memoize = require('memoize-one').default

const { StylePropType } = require('../../helpers/prop-types')
const defaultStyleSheet = require('./style.css')
const IconLink = require('../icon-link')

class WhatsappButton extends React.Component {
  static defaultProps = {
    text: '',
    children: 'Share on Whatsapp',
    target: '_blank'
  }

  static propTypes = {
    text: PropTypes.string,
    children: PropTypes.node,
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
    style: StylePropType
  }

  getStyle = memoize((defaultStyle, style) => [defaultStyle, style])

  render () {
    const {
      text,
      children,
      target,
      style: externalStyle,
      ...rest
    } = this.props

    const url = `https://api.whatsapp.com/send?text=${encodeURI(text)}`
    const style = this.getStyle(defaultStyleSheet.root, externalStyle)

    return (
      <IconLink
        {...rest}
        href={url}
        iconName='whatsapp'
        target={target}
        style={style}
      >
        {children}
      </IconLink>
    )
  }
}

module.exports = WhatsappButton
