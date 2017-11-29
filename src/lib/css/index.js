const { StyleSheet } = require('aphrodite/no-important')

const typography = require('./typography')
const colors = require('./colors')
const sizes = require('./sizes')
const utilities = require('./utilities')

const Extended = StyleSheet.extend([])

// const createGetStyle = stylesheet => {
//   return () => {
//     const styles = Extended.StyleSheet.create(stylesheet)
//     return Object.keys(stylesheet).reduce((classList, className) => {
//       classList[className] = Extended.css(styles[className])
//       return classList
//     }, {})
//   }
// }

const mergeStyleSheets = (...stylesheets) => {
  const keys = Object.keys(...stylesheets)

  return keys.reduce((classList, className) => {
    const names = stylesheets
      .filter(sheet => sheet != null)
      .filter(sheet => !!sheet[className])
      .map(sheet => sheet[className])
    classList[className] = names

    return classList
  }, {})
}

module.exports = {
  // legacy helpers
  // createGetStyle,

  // aphrodite helpers
  aphrodite: Extended,
  css: Extended.css,
  StyleSheet: Extended.StyleSheet,
  mergeStyleSheets,

  // variables
  typography,
  colors,
  sizes,
  utilities
}
