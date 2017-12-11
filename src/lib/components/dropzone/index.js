// @flow
const React = require('react')
let ReactDropzone = require('react-dropzone')
let styles = require('react-dropzone/src/utils/styles')
ReactDropzone = ReactDropzone.default || ReactDropzone
styles = styles.default || styles

type Props = {
  accept: string,
  className: string,
  rejectClassName?: string,
  style?: Object,
  acceptStyle?: Object,
  activeStyle?: Object,
  disabledStyle?: Object,
  rejectStyle?: Object,
  rest?: Array<mixed>
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

  const styleProps = {
    style: style || styles.default,
    activeStyle: activeStyle || styles.active,
    acceptStyle: acceptStyle || styles.active,
    rejectStyle: rejectStyle || styles.rejected,
    disabledStyle: disabledStyle || styles.disabled
  }

  let rejectCn = isMimeType ? rejectClassName : ''

  if (noStyle && !isMimeType) {
    styleProps.rejectStyle = {}
  }

  return (
    <ReactDropzone
      {...rest}
      {...styleProps}
      rejectClassName={rejectCn}
      accept={accept}
    />
  )
}

Dropzone.defaultProps = {
  accept: '',
  className: ''
}

module.exports = Dropzone
