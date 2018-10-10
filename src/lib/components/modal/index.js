const React = require('react')
const ReactModal = require('react-modal')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { css } = require('../../css')
const defaultStyle = require('./style.css')
const cardStyle = require('../card/style.css')

/**
 * TODO: Remove `ariaHideApp={false}` until
 * https://github.com/reactjs/react-modal/issues/580 is resolved
 */
const Modal = props => {
  const {
    children,
    isOpen,
    onAfterOpen,
    onRequestClose,
    closeTimeoutMS,
    contentLabel,
    portalStyle,
    overlayStyle,
    style,
    bodyOpenStyle,
    shouldFocusAfterRender,
    shouldCloseOnOverlayClick,
    shouldCloseOnEsc,
    shouldReturnFocusAfterClose,
    role,
    parentSelector,
    aria
  } = props

  return (
    <ReactModal
      overlayClassName={css(defaultStyle.overlay, overlayStyle)}
      className={css(cardStyle.root, defaultStyle.card, style)}
      bodyOpenClassName={css(bodyOpenStyle) || undefined}
      portalClassName={css(portalStyle) || undefined}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={closeTimeoutMS}
      contentLabel={contentLabel}
      shouldFocusAfterRender={shouldFocusAfterRender}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
      role={role}
      parentSelector={parentSelector}
      aria={aria}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  appElement: PropTypes.string,
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  closeTimeoutMS: PropTypes.number,
  contentLabel: PropTypes.string,
  portalStyle: CustomPropTypes.style,
  overlayStyle: CustomPropTypes.style,
  style: CustomPropTypes.style,
  bodyOpenStyle: CustomPropTypes.style,
  ariaHideApp: PropTypes.bool,
  shouldFocusAfterRender: PropTypes.bool,
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  shouldReturnFocusAfterClose: PropTypes.bool,
  role: PropTypes.string,
  parentSelector: PropTypes.func,
  aria: PropTypes.shape({
    labelledby: PropTypes.string,
    describedby: PropTypes.string
  })
}

module.exports = Modal
