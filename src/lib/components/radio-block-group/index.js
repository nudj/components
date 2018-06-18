const React = require('react')

const { StylePropType } = require('../../helpers/prop-types')
const RadioGroup = require('../radio-group')
const RadioBlock = require('../radio-block')
const defaultStyleSheet = require('./style.css')

const RadioBlockGroup = (props) => (
  <RadioGroup
    {...props}
    styles={[defaultStyleSheet.root, props.styles]}
    Input={RadioBlock}
  />
)

RadioBlockGroup.defaultProps = {
  styles: {}
}

RadioBlockGroup.propTypes = {
  styles: StylePropType
}

module.exports = RadioBlockGroup
