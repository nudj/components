const React = require('react')

const ExitArrow = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <g
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinejoin='round'
      strokeLinecap='round'
    >
      <path
        data-cap='butt'
        data-color='color-2'
        d='M8.1 16c1.4 2.4 4 4 6.9 4 4.4 0 8-3.6 8-8s-3.6-8-8-8c-3 0-5.5 1.6-6.9 4'
      />
      <path data-cap='butt' d='M16 12H2' />
      <path d='M5 15l-3-3 3-3' />
    </g>
  </svg>
)

module.exports = ExitArrow
