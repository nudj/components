const React = require('react')
const PropTypes = require('prop-types')
let ReactDropzone = require('react-dropzone')
ReactDropzone = ReactDropzone.default || ReactDropzone

const CustomPropTypes = require('../../helpers/prop-types')
const styles = require('./style')

const renderChildrenWrapper = (children, isMimeType) => {
  if (!isMimeType) {
    return ({ isDragReject, ...rest }) => children(rest)
  }

  return props => children(props)
}

const Dropzone = props => {
  const {
    accept,
    className,
    rejectClassName,
    style,
    acceptStyle,
    activeStyle,
    disabledStyle,
    rejectStyle,
    children,
    ...rest
  } = props

  const isMimeType = /\/(\*|(.*))$/.test(accept.trim())
  const noStyle =
    !className &&
    !style &&
    !activeStyle &&
    !acceptStyle &&
    !rejectStyle &&
    !disabledStyle

  const styleProps = {}

  if (noStyle) {
    styleProps.style = styles.default
    styleProps.activeStyle = styles.active
    styleProps.acceptStyle = styles.active
    styleProps.rejectStyle = isMimeType ? styles.rejected : {}
    styleProps.disabledStyle = styles.disabled
  }

  const classNameProps = {
    className,
    rejectClassName: isMimeType ? rejectClassName : ''
  }

  return (
    <ReactDropzone
      {...rest}
      {...styleProps}
      {...classNameProps}
      accept={accept}
      children={renderChildrenWrapper(children, isMimeType)}
    />
  )
}

Dropzone.propTypes = {
  accept: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  rejectClassName: PropTypes.string,
  style: CustomPropTypes.style,
  acceptStyle: CustomPropTypes.style,
  activeStyle: CustomPropTypes.style,
  disabledStyle: CustomPropTypes.style,
  rejectStyle: CustomPropTypes.style,
  children: PropTypes.func.isRequired,
  rest: PropTypes.array
}

Dropzone.defaultProps = {
  accept: '',
  className: ''
}

module.exports = Dropzone
