const React = require('react')

const OpenLetter = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <g>
      <path data-stroke='none' d='M1 11l4-2.9v5.082zM23 11l-4-2.9v5.082z' />
      <path
        data-cap='butt'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M5 8.1L1 11v12h22V11l-4-2.9'
      />
      <path
        data-cap='butt'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M5 13.2V1h14v12.2M1 11l22 12M23 11l-11 6'
      />
      <path
        data-color='color-2'
        strokeWidth={2}
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeLinejoin='round'
        d='M9 6h6M9 10h6'
      />
    </g>
  </svg>
)

module.exports = OpenLetter
