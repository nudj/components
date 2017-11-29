// @flow
const React = require('react')

const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')

type Stylesheet = {
  root?: Object
}

type Props = {
  children: React.Node,
  stylesheet: Stylesheet
}

const Card = ({ children, stylesheet }: Props) => {
  const classNames = mergeStyleSheets(defaultStyleSheet, stylesheet)

  return <div className={css(classNames.root)}>{children}</div>
}

Card.defaultProps = {
  stylesheet: {}
}

module.exports = Card
