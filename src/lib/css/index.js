const { StyleSheet } = require('aphrodite/no-important')
const warning = require('warning')
const isEmpty = require('lodash/isEmpty')
const isString = require('lodash/isString')
const flatten = require('lodash/flattenDeep')
const partition = require('lodash/partition')

const typography = require('./typography')
const colors = require('./colors')
const sizes = require('./sizes')
const utilities = require('./utilities')
const animations = require('./animations')
const { FS_HIDE_CLASS } = require('../constants')

const Extended = StyleSheet.extend([])

const mergeStyleSheets = (...stylesheets) => {
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

const mergeStyle = (...styles) => {
  return flatten(styles).filter(style => style != null)
}

const acceptedClassNames = [
  FS_HIDE_CLASS
]

const css = (...args) => {
  const [ classNames, styles ] = partition(args, isString)

  classNames.forEach(className => warning(
    acceptedClassNames.includes(className),
    `Invalid string passed to \`css\`. String \`${className}\` must be one of [${acceptedClassNames.join(', ')}]`
  ))

  return `${Extended.css(flatten(styles).filter(style => !isEmpty(style)))} ${classNames.join(' ')}`.trim()
}

module.exports = {
  aphrodite: Extended,
  css,
  StyleSheet: Extended.StyleSheet,
  mergeStyleSheets,
  mergeStyle,
  typography,
  colors,
  sizes,
  utilities,
  animations
}
