// @flow
const React = require('react')
let ReactDropzone = require('react-dropzone')
let styles = require('./style')
ReactDropzone = ReactDropzone.default || ReactDropzone

type Props = {
  accept: string,
  className: string,
  rejectClassName?: string,
  style?: Object,
  acceptStyle?: Object,
  activeStyle?: Object,
  disabledStyle?: Object,
  rejectStyle?: Object,
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
