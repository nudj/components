const React = require('react')
const PropTypes = require('prop-types')
const memoize = require('memoize-one').default

const CustomPropTypes = require('../../helpers/prop-types')
const defaultStyleSheet = require('./style.css')
const IconLink = require('../icon-link')

class TwitterButton extends React.Component {
  static defaultProps = {
    text: '',
    children: 'Share on Twitter',
    target: '_blank'
  }

  static propTypes = {
    text: PropTypes.string,
    url: PropTypes.string.isRequired,
    via: PropTypes.string,
    children: PropTypes.node,
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
    style: CustomPropTypes.style
  }

  getStyle = memoize((defaultStyle, style) => [defaultStyle, style])

  render () {
    const {
      text,
      url,
      via,
      children,
      target,
      style: externalStyle,
      ...rest
    } = this.props

    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&via=${via}`
    const style = this.getStyle(defaultStyleSheet.root, externalStyle)

    return (
      <IconLink
        {...rest}
        href={shareUrl}
        iconName='twitter'
        target={target}
        style={style}
      >
        {children}
      </IconLink>
    )
  }
}

module.exports = TwitterButton
