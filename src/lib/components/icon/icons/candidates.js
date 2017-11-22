const React = require('react')

const Candidates = props => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <g
      fillRule='evenodd'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      transform='translate(1 1)'
    >
      <path d='M0 0h20v22H0z' />
      <path d='M12 15.836c0-.604-.265-1.179-.738-1.554C10.539 13.708 9.285 13 7.5 13s-3.039.708-3.762 1.282c-.473.375-.738.95-.738 1.554V17h9v-1.164z' />
      <circle cx={7.5} cy={7.5} r={2.5} />
      <path d='M15 17h2v-1.164c0-.604-.265-1.179-.738-1.554a5.897 5.897 0 0 0-2.264-1.105m-1.002-8.128A2.501 2.501 0 0 1 13 9.95' />
    </g>
  </svg>
)

module.exports = Candidates
