const React = require('react')
const PropTypes = require('prop-types')

const { FS_SHOW } = require('../../constants')
const { css, mergeStyleSheets } = require('../../css')
const mss = require('../../css/modifiers.css')
const defaultStyleSheet = require('./style.css')
const Icon = require('../icon')
const Text = require('../text')

const getDirectionIcon = (direction, style) => {
  switch (direction) {
    case 'asc':
      return <Icon name='chevron' style={style.icon} />
    case 'desc':
      return <Icon name='chevron' style={[style.icon, mss.rotate180]} />
    default:
      return null
  }
}

const Statistic = props => {
  const {
    value,
    label,
    direction,
    correlation,
    comparator,
    styleSheet,
    nonsensitive
  } = props
  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

  return (
    <div className={css(style.root)}>
      <Text nonsensitive={nonsensitive} element='dd' style={style.label}>
        {label}
      </Text>
      <Text
        size='largeVi'
        element='dt'
        style={[style.value, style[correlation]]}
      >
        {getDirectionIcon(direction, style)}
        {value}
      </Text>
      { comparator && (
        <Text
          nonsensitive={nonsensitive}
          element='div'
          size='smallI'
          style={style.comparator}
        >
          {comparator}
        </Text>
      )}
    </div>
  )
}

Statistic.propTypes = {
  value: PropTypes.node,
  label: PropTypes.node,
  direction: PropTypes.oneOf(['asc', 'desc']),
  correlation: PropTypes.oneOf(['positive', 'negative']),
  comparator: PropTypes.string,
  styleSheet: PropTypes.shape({
    root: PropTypes.object,
    value: PropTypes.object,
    positive: PropTypes.object,
    negative: PropTypes.object,
    icon: PropTypes.object,
    label: PropTypes.object
  }),
  nonsensitive: PropTypes.bool
}

Statistic.defaultProps = {
  styleSheet: {},
  nonsensitive: FS_SHOW
}

module.exports = Statistic
