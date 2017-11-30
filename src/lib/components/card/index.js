// @flow
const React = require('react')

const { css } = require('../../css')
const styleSheet = require('./style.css')

type Props = {
  children: React.Node,
  style?: Object
}

const Card = ({ children, style }: Props) => (
  <div className={css(styleSheet.root, style)}>{children}</div>
)

module.exports = Card
