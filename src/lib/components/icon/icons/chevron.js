const React = require('react')

const Chevron = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <path
      d='M22.412 16.809L12 9.236 1.588 16.809.411 15.192l11-8a.998.998 0 0 1 1.177 0l11 8-1.176 1.617z'
    />
  </svg>
)

module.exports = Chevron
