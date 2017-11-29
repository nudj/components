// @flow
const React = require('react')

const { css } = require('../../css')
const styleSheet = require('./style.css')

type Props = {
  children: React.Node,
  styles?: Object
}

const Card = ({ children, styles }: Props) => (
  <div className={css(styleSheet.root, styles)}>{children}</div>
)

module.exports = Card
