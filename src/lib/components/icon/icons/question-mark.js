const React = require('react')

const QuestionMark = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <g>
      <circle
        strokeWidth={2}
        strokeLinecap='round'
        strokeMiterlimit={10}
        cx={12}
        cy={12}
        r={11}
        strokeLinejoin='round'
      />
      <path
        data-color='color-2'
        strokeWidth={2}
        strokeLinecap='round'
        strokeMiterlimit={10}
        d='M12 15v-2c1.609 0 3-1.391 3-3s-1.391-3-3-3c-1.194 0-2.342.893-2.792 1.921'
        strokeLinejoin='round'
      />
      <circle data-color='color-2' data-stroke='none' cx={12} cy={18} r={1} />
    </g>
  </svg>
)

module.exports = QuestionMark
