const React = require('react')

const Tick = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <path
      strokeWidth={2}
      strokeLinecap='round'
      strokeMiterlimit={10}
      strokeLinejoin='round'
      d='M6 12l4 4 8-8'
    />
  </svg>
)

module.exports = Tick
