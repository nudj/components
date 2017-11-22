const React = require('react')

const EmptySpeechBubble = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <path
      strokeWidth={2}
      strokeLinecap='round'
      strokeMiterlimit={10}
      d='M20.4 16.8C22 15.2 23 13.2 23 11c0-5-4.9-9-11-9S1 6 1 11s4.9 9 11 9c1.1 0 2.1-.1 3.1-.4L21 22l-.6-5.2z'
      strokeLinejoin='round'
    />
  </svg>
)

module.exports = EmptySpeechBubble
