const React = require('react')

const Buildings = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <path
      data-color='color-2'
      strokeWidth={2}
      strokeLinecap='round'
      strokeMiterlimit={10}
      strokeLinejoin='round'
      d='M18 6V1H6v8'
    />
    <path
      strokeWidth={2}
      strokeLinecap='round'
      strokeMiterlimit={10}
      strokeLinejoin='round'
      d='M10 23h4M1 12h9v11H1zM14 9h9v14h-9zM18 13h1M18 16h1M18 19h1M5 19h1M5 16h1'
    />
  </svg>
)

module.exports = Buildings
