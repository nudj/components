// @flow
const svgSanitise = require('../../helpers/svg-sanitise')

const linkSvg = (name: string) => {
  const filePath = `./svgs/${name}.svg`
  return svgSanitise(require(filePath))
}

module.exports = {
  briefcase: linkSvg('briefcase'),
  buildings: linkSvg('buildings'),
  candidates: linkSvg('candidates'),
  chevron: linkSvg('chevron'),
  closeButton: linkSvg('close-icon'),
  email: linkSvg('email-icon'),
  emptySpeechBubble: linkSvg('empty-speech-bubble'),
  speechBubble: linkSvg('speech-bubble'),
  exitArrow: linkSvg('exit-arrow'),
  facebookMessenger: linkSvg('facebook-messenger'),
  mobile: linkSvg('mobile'),
  network: linkSvg('network'),
  openLetter: linkSvg('open-letter'),
  paperclip: linkSvg('paperclip'),
  questionMark: linkSvg('question-mark'),
  tick: linkSvg('tick'),
  todo: linkSvg('todo'),
  whatsapp: linkSvg('whatsapp')
}
