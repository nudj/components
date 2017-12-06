const { StyleSheet } = require('../../css')

const side = {
  flexGrow: 0,
  alignItems: 'center'
}

const stylesheet = StyleSheet.create({
  root: {
    display: 'flex'
  },
  left: side,
  right: side,
  large: {
    flexGrow: 1
  }
})

module.exports = stylesheet
