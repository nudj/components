const React = require('react')
const PropTypes = require('prop-types')
const get = require('lodash/get')

const StyleChild = (props, context) => {
  const child = get(props, 'children[0]')
  if (!child) throw (new Error('Please provide a child to style'))
  return React.cloneElement(child, context)
}
StyleChild.contextTypes = {
  css: PropTypes.func
}

module.exports = StyleChild
