const PropTypes = require('prop-types')
const isArray = require('lodash/isArray')
const isObject = require('lodash/isObject')

const StylePropType = (props, propName, componentName) => {
  const value = props[propName]

  if (value && (!isArray(value) && !isObject(value))) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Should be a style object or an array of style objects. You passed ${JSON.stringify(value)}`)
  }
}

const ComponentPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.func])

module.exports = {
  ...PropTypes,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  date: PropTypes.instanceOf(Date),
  integer: PropTypes.number,
  function: PropTypes.func,
  boolean: PropTypes.bool,
  style: StylePropType,
  component: ComponentPropType
}
