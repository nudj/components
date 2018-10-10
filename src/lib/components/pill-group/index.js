const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { css, mergeStyleSheets } = require('../../css')
const defaultStyleSheet = require('./style.css')
const Pill = require('../pill')

const PillGroup = ({ volume, values, styleSheet, ...rest }) => {
  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

  return (
    <div className={css(style.root)}>
      {values.map((value, i) => (
        <Pill key={i} volume={volume} style={style.pill}>
          {value}
        </Pill>
      ))}
    </div>
  )
}

PillGroup.propTypes = {
  volume: PropTypes.oneOf(['murmur', 'whisper']),
  styleSheet: PropTypes.shape({
    root: CustomPropTypes.style,
    pill: CustomPropTypes.style
  }),
  values: PropTypes.arrayOf(PropTypes.node)
}

PillGroup.defaultProps = {
  styleSheet: {},
  values: []
}

module.exports = PillGroup
