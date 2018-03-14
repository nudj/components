const React = require('react')

const style = require('./style.css')
const CheckboxGroup = require('../checkbox-group')
const SelectablePill = require('../selectable-pill')

const SelectablePillGroup = ({ styles, ...props }) => (
  <CheckboxGroup
    {...props}
    styles={[style.root, styles]}
    Input={SelectablePill}
  />
)

module.exports = SelectablePillGroup
