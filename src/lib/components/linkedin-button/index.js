const React = require('react')
const PropTypes = require('prop-types')
const memoize = require('memoize-one').default

const CustomPropTypes = require('../../helpers/prop-types')
const defaultStyleSheet = require('./style.css')
const IconLink = require('../icon-link')

const getHref = (url, title, summary, source) => {
  let shareHref = `https://www.linkedin.com/shareArticle?mini=true`
  if (url) shareHref = `${shareHref}&url=${encodeURI(url)}`
  if (title) shareHref = `${shareHref}&title=${encodeURI(title)}`
  if (summary) shareHref = `${shareHref}&summary=${encodeURI(summary)}`
  if (source) shareHref = `${shareHref}&source=${encodeURI(source)}`

  return shareHref
}

class LinkedinButton extends React.Component {
  static defaultProps = {
    url: '',
    title: '',
    summary: '',
    source: 'nudj',
    children: 'Share on LinkedIn',
    target: '_blank'
  }

  static propTypes = {
    url: PropTypes.string,
    children: PropTypes.node,
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
    style: CustomPropTypes.style
  }

  getStyle = memoize((defaultStyle, style) => [defaultStyle, style])

  render () {
    const {
      url,
      title,
      summary,
      source,
      children,
      target,
      style: externalStyle,
      ...rest
    } = this.props

    const href = getHref(url, title, summary, source)
    const style = this.getStyle(defaultStyleSheet.root, externalStyle)

    return (
      <IconLink
        {...rest}
        href={href}
        iconName='linkedin'
        target={target}
        style={style}
      >
        {children}
      </IconLink>
    )
  }
}

module.exports = LinkedinButton
