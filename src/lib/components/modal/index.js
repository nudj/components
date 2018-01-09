/* global Style, HTMLElement */
// @flow
const React = require('react')
const ReactModal = require('react-modal')

const { css } = require('../../css')
const defaultStyle = require('./style.css')
const cardStyle = require('../card/style.css')

type ModalProps = {
  children: React.Node,
  isOpen: boolean,
  appElement: string,
  onAfterOpen?: () => void,
  onRequestClose?: () => void,
  closeTimeoutMS?: Number,
  contentLabel?: string,
  portalStyle?: Style,
  overlayStyle?: Style,
  style?: Style,
  bodyOpenStyle?: Style,
  ariaHideApp?: boolean,
  shouldFocusAfterRender?: boolean,
  shouldCloseOnOverlayClick?: boolean,
  shouldCloseOnEsc?: boolean,
  shouldReturnFocusAfterClose?: boolean,
  role?: string,
  parentSelector?: () => HTMLElement,
  aria?: {
    labelledby: string,
    describedby: string
  }
}

/**
 * TODO: Remove `ariaHideApp={false}` until
 * https://github.com/reactjs/react-modal/issues/580 is resolved
 */
const Modal = (props: ModalProps) => {
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

module.exports = Modal
