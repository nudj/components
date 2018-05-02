// @flow
const React = require('react')

const { css } = require('../../css')
const styleSheet = require('./style.css')

type ScreenReadableProps = {
  children: React.Node
}

const ScreenReadable = ({ children }: ScreenReadableProps) => (
  <span className={css(styleSheet.root)}>
    {children}
  </span>
)

module.exports = ScreenReadable
