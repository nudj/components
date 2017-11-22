// @flow
const React = require('react')
const classnames = require('classnames')

const icons = {
  briefcase: require('./icons/briefcase'),
  buildings: require('./icons/buildings'),
  candidates: require('./icons/candidates'),
  chevron: require('./icons/chevron'),
  closeButton: require('./icons/close-icon'),
  email: require('./icons/email-icon'),
  emptySpeechBubble: require('./icons/empty-speech-bubble'),
  speechBubble: require('./icons/speech-bubble'),
  exitArrow: require('./icons/exit-arrow'),
  facebookMessenger: require('./icons/facebook-messenger'),
  mobile: require('./icons/mobile'),
  network: require('./icons/network'),
  openLetter: require('./icons/open-letter'),
  paperclip: require('./icons/paperclip'),
  questionMark: require('./icons/question-mark'),
  tick: require('./icons/tick'),
  todo: require('./icons/todo'),
  whatsapp: require('./icons/whatsapp')
}

type IconProps = {
  name: string,
  className?: string
}

const Icon = (props: IconProps) => {
  const { name, className } = props
  const Icon = icons[name]

  if (!Icon) {
    throw new Error('Invalid icon name')
  }

  return <Icon className={classnames(className)} />
}

module.exports = Icon
