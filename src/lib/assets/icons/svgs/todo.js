const React = require('react')

const Todo = props => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <g>
      <path d='M22 0H2a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm-2 21H4V3h3v3h3a2 2 0 1 1 4 0h3V3h3v18z' />
      <path
        data-color='color-2'
        d='M11 17a.997.997 0 0 1-.707-.293L7.586 14 9 12.586l2 2 4-4L16.414 12l-4.707 4.707A.997.997 0 0 1 11 17z'
      />
    </g>
  </svg>
)

module.exports = Todo
