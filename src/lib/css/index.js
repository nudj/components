const { StyleSheet } = require('aphrodite/no-important')
const typography = require('./typography')
const colors = require('./colors')
const sizes = require('./sizes')
const utilities = require('./utilities')

const Extended = StyleSheet.extend([])

const css = stylesheet => {
  return () => {
    const styles = Extended.StyleSheet.create(stylesheet)
    return Object.keys(stylesheet).reduce((classList, className) => {
      classList[className] = Extended.css(styles[className])
      return classList
    }, {})
  }
}

module.exports = {
  aphrodite: Extended,
  css,
  typography,
  colors,
  sizes,
  utilities
}
