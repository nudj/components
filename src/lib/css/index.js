const variables = require('./variables')
const mixins = require('./mixins')

const { StyleSheet } = require('aphrodite/no-important')

const Extended = StyleSheet.extend([])

const css = (stylesheet) => {
  return () => {
    const styles = Extended.StyleSheet.create(stylesheet)
    return Object.keys(stylesheet).reduce((classList, className) => {
      classList[className] = Extended.css(styles[className])
      return classList
    }, {})
  }
}

module.exports = {
  css,
  mixins,
  variables
}
