const React = require('react')

const Network = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <g
      strokeWidth={2}
      strokeLinecap='round'
      strokeMiterlimit={10}
      strokeLinejoin='round'
    >
      <path d='M10 19h4v4h-4zM19 19h4v4h-4zM1 19h4v4H1z' />
      <path data-color='color-2' d='M12 9v6M3 15v-3h18v3' />
      <circle cx={12} cy={3} r={2} />
    </g>
  </svg>
)

module.exports = Network
