/* global Style */
// @flow
const React = require('react')
let ReactDropzone = require('react-dropzone')
ReactDropzone = ReactDropzone.default || ReactDropzone

const styles = require('./style')

type Props = {
  accept: string,
  className: string,
  rejectClassName?: string,
  style?: Style,
  acceptStyle?: Style,
  activeStyle?: Style,
  disabledStyle?: Style,
  rejectStyle?: Style,
  children: Function,
  rest?: Array<mixed>
}

const renderChildrenWrapper = (children, isMimeType) => {
  if (!isMimeType) {
    return ({ isDragReject, ...rest }) => children(rest)
  }

  return props => children(props)
}

const Dropzone = (props: Props) => {
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

Dropzone.defaultProps = {
  accept: '',
  className: ''
}

module.exports = Dropzone
