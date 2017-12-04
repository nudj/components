// @flow
const flatten = require('lodash/flatten')
const { StyleSheet } = require('aphrodite/no-important')
const isEmpty = require('lodash/isEmpty')

const typography = require('./typography')
const colors = require('./colors')
const sizes = require('./sizes')
const utilities = require('./utilities')

const Extended = StyleSheet.extend([])

type StyleSheetType = {
  [string]: Object
}

const mergeStyleSheets = (...stylesheets: Array<StyleSheetType>) => {
  const keys = Object.keys(...stylesheets)

  return keys.reduce((classList, className) => {
    const names = flatten(
      stylesheets
        .filter(sheet => sheet != null)
        .filter(sheet => !!sheet[className])
        .map(sheet => {
          return sheet[className]
        })
    )

    classList[className] = names

    return classList
  }, {})
}

const css = (...args: Array<Object>) =>
  Extended.css(args.filter(arg => !isEmpty(arg)))

module.exports = {
  aphrodite: Extended,
  css,
  StyleSheet: Extended.StyleSheet,
  mergeStyleSheets,
  typography,
  colors,
  sizes,
  utilities
}
