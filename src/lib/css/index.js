/* global Style */
// @flow
const { StyleSheet } = require('aphrodite/no-important')
const isEmpty = require('lodash/isEmpty')
const flatten = require('lodash/flattenDeep')

const typography = require('./typography')
const colors = require('./colors')
const sizes = require('./sizes')
const utilities = require('./utilities')

const Extended = StyleSheet.extend([])

type StyleSheetType = {
  [string]: Object
}

const mergeStyleSheets = (...stylesheets: Array<StyleSheetType>) => {
  const keys = Object.keys(Object.assign({}, ...stylesheets))

  return keys.reduce((classList, className) => {
    const names = flatten(
      stylesheets
        .filter(sheet => sheet != null)
        .filter(sheet => !!sheet[className])
        .map(sheet => sheet[className])
    )

    classList[className] = names

    return classList
  }, {})
}

const mergeStyle = (...styles: Array<Style>) => {
  return flatten(styles).filter(style => style != null)
}

const css = (...args: Array<Object>) =>
  Extended.css(flatten(args).filter(arg => !isEmpty(arg)))

module.exports = {
  aphrodite: Extended,
  css,
  StyleSheet: Extended.StyleSheet,
  mergeStyleSheets,
  mergeStyle,
  typography,
  colors,
  sizes,
  utilities
}
