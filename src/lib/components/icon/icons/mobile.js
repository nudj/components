const React = require('react')

const Mobile = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <g>
      <path
        data-color='color-2'
        strokeWidth={2}
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeLinejoin='round'
        d='M4 15h16M20 5H4'
      />
      <circle data-color='color-2' data-stroke='none' cx={12} cy={19} r={1} />
      <path
        strokeWidth={2}
        strokeLinecap='round'
        strokeMiterlimit={10}
        d='M6 1h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z'
        strokeLinejoin='round'
      />
    </g>
  </svg>
)

module.exports = Mobile
