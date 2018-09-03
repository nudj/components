const React = require('react')
const PropTypes = require('prop-types')
const memoize = require('memoize-one').default

const CustomPropTypes = require('../../helpers/prop-types')

const Icon = require('../icon')
const icons = require('../icon/icons')
const InlineAction = require('../inline-action')
const ScreenReadable = require('../screen-readable')
const defaultStyleSheet = require('./style.css')

class IconAction extends React.Component {
  static defaultProps = {
    style: {}
  }

  static propTypes = {
    iconName: PropTypes.oneOf(Object.keys(icons)).isRequired,
    children: PropTypes.node,
    style: CustomPropTypes.style
  }

  getStyle = memoize((defaultStyle, style) => [defaultStyle, style])

  render () {
    const {
      iconName,
      children,
      style: externalStyle,
      ...rest
    } = this.props

    const style = this.getStyle(defaultStyleSheet.root, externalStyle)

    return (
      <InlineAction
        {...rest}
        style={style}
        nonsensitive
      >
        <Icon name={iconName} />
        <ScreenReadable>{children}</ScreenReadable>
      </InlineAction>
    )
  }
}

module.exports = IconAction
