const React = require('react')
const PropTypes = require('prop-types')
const memoize = require('memoize-one').default

const { StylePropType } = require('../../helpers/prop-types')
const defaultStyleSheet = require('./style.css')
const IconLink = require('../icon-link')

class EmailButton extends React.Component {
  static defaultProps = {
    children: 'Email',
    target: '_blank'
  }

  static propTypes = {
    to: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    children: PropTypes.node,
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
    style: StylePropType,
    gmail: PropTypes.bool
  }

  getStyle = memoize((defaultStyle, style) => [defaultStyle, style])

  render () {
    const {
      to,
      subject,
      body,
      children,
      target,
      style: externalStyle,
      gmail,
      ...rest
    } = this.props

    const url = gmail
      ? `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`
      : `mailto:${to}?subject=${encodeURI(subject)}&body=${encodeURI(body)}`
    const style = gmail
      ? this.getStyle(defaultStyleSheet.root, externalStyle)
      : externalStyle

    return (
      <IconLink
        {...rest}
        href={url}
        iconName='email'
        target={target}
        style={style}
      >
        {children}
      </IconLink>
    )
  }
}

module.exports = EmailButton
