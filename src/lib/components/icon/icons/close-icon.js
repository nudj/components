const React = require('react')

const CloseIcon = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <g
      strokeWidth={2}
      strokeLinecap='round'
      strokeMiterlimit={10}
      strokeLinejoin='round'
    >
      <path d='M19 5L5 19M19 19L5 5' />
    </g>
  </svg>
)

module.exports = CloseIcon
