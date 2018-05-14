const { StyleSheet } = require('../../css')

const styleSheet = StyleSheet.create({
  root: {
    fontSmoothing: 'antialiased',
    /* fix webkit/blink poor rendering issues */
    transform: 'translate3d(0,0,0)',
    width: '1em',
    height: '1em',
    lineHeight: 'inherit',
    stroke: 'inherit',
    fill: 'inherit',
    verticalAlign: 'middle'
  },

  /**
   * Stroke based icons
   */
  close: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  circle: {
    stroke: 'currentColor',
    fill: 'transparent',
    strokeWidth: '2px'
  },

  /**
   * Legacy
   * Stroke based icons
   */
  briefcase: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  buildings: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  candidates: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  closeButton: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  email: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  emptySpeechBubble: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  speechBubble: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  exitArrow: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  mobile: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  network: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  openLetter: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  questionMark: {
    stroke: 'currentColor',
    fill: 'transparent'
  },
  tick: {
    stroke: 'currentColor',
    fill: 'transparent'
  },

  /**
   * Fill based icons
   */
  chevron: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  facebook: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  facebookMessenger: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  paperclip: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  todo: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  twitter: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  whatsapp: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  externalLink: {
    stroke: 'transparent',
    fill: 'currentColor'
  }
})

module.exports = styleSheet
