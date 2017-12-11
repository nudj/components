const { StyleSheet } = require('../../css')

const side = {
  flexGrow: 0,
  alignSelf: 'center'
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
