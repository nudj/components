const React = require('react')

const Briefcase = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <g
      strokeWidth={2}
      strokeLinecap='round'
      strokeMiterlimit={10}
      strokeLinejoin='round'
    >
      <path data-color='color-2' d='M8 5V1h8v4' />
      <path d='M9 15H1V5h22v10h-8M22 18v5H2v-5' />
      <path data-color='color-2' d='M9 13h6v4H9z' />
    </g>
  </svg>
)

module.exports = Briefcase
