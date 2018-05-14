const PropTypes = require('prop-types')
const isArray = require('lodash/isArray')
const isObject = require('lodash/isObject')

const StylePropType = (props, propName, componentName) => {
  const value = props[propName]

  if (!isArray(value) && !isObject(value)) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Should be a style object or an array of styles object`)
  }
}

const ComponentPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.func])

module.exports = {
  StylePropType,
  ComponentPropType
}
