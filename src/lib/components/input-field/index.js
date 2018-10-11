const React = require('react')
const PropTypes = require('prop-types')

const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')

const InputField = props => {
  const { label, required, styleSheet, description, htmlFor, children } = props
  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

  const requiredNotice = () => (
    <span className={css(style.requiredNotice)}>*</span>
  )

  const descriptionContainer = () => (
    <div className={css(style.description)}>{description}</div>
  )

  return (
    <div className={css(style.root)}>
      <label className={css(style.label)} htmlFor={htmlFor}>
        {label}
        {required && requiredNotice()}
      </label>
      {description && descriptionContainer()}
      <div className={css(style.inputContainer)}>{children}</div>
    </div>
  )
}

InputField.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  styleSheet: PropTypes.shape({
    root: PropTypes.object,
    label: PropTypes.object,
    requiredNotice: PropTypes.object,
    description: PropTypes.object,
    inputContainer: PropTypes.object
  }),
  children: PropTypes.node.isRequired,
  description: PropTypes.node
}

InputField.defaultProps = {
  styleSheet: {}
}

module.exports = InputField
