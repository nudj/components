const React = require('react')

const EmailIcon = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <g
      strokeWidth={2}
      strokeLinecap='round'
      strokeMiterlimit={10}
      strokeLinejoin='round'
    >
      <path data-color='color-2' d='M19 7l-7 7-7-7' />
      <path d='M1 3h22v18H1z' />
      <path data-color='color-2' d='M7 15l-2 2M17 15l2 2' />
    </g>
  </svg>
)

module.exports = EmailIcon
