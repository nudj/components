const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { css, mergeStyleSheets } = require('../../css')
const defaultStyleSheet = require('./style.css')
const Icon = require('../icon')
const Input = require('../input')

const IconInput = ({
  styleSheet,
  iconName,
  id,
  inputStyleSheet,
  name,
  ...rest
}) => {
  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)
  const inputStyle = mergeStyleSheets({ input: style.input }, inputStyleSheet)

  return (
    <div className={css(style.root)}>
      <Icon style={style.icon} name={iconName} />
      <Input {...rest} name={name} id={id} styleSheet={inputStyle} />
    </div>
  )
}

IconInput.propTypes = {
  styleSheet: PropTypes.shape({
    root: CustomPropTypes.style,
    icon: CustomPropTypes.style,
    input: CustomPropTypes.style
  }),
  inputStyleSheet: PropTypes.object,
  iconName: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string
}

IconInput.defaultProps = {
  styleSheet: {},
  inputStyleSheet: {}
}

module.exports = IconInput
