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

  briefcase: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  buildings: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  candidates: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  chevron: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  close: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  email: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  exitArrow: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  externalLink: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  nudj: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  questionMark: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  /**
   * Icons w/circle
   */
  pause: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  play: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  /**
   * Social icons
   */
  facebookMessenger: {
    stroke: 'transparent',
    fill: 'currentColor'
  },
  facebook: {
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
  }
})

module.exports = styleSheet
