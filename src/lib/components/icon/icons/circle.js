const React = require('react')

const Circle = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <circle cx='12' cy='12' r='9' />
  </svg>
)

module.exports = Circle
