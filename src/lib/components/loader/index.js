/* global Style */
// @flow
const React = require('react')

const { css } = require('../../css')
const styleSheet = require('./style.css')

type Props = {
  style?: Style
}

const Loader = ({ style }: Props) => (
  <div className={css(styleSheet.spinner, style)} />
)

module.exports = Loader
