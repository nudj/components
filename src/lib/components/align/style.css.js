const { StyleSheet } = require('../../css')

const side = {
  flexBasis: '1%',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap'
}

const stylesheet = StyleSheet.create({
  root: {
    display: 'flex',
    width: '100%'
  },
  left: side,
  right: side,
  large: {
    flexBasis: '99%',
    whiteSpace: 'inherit'
  }
})

module.exports = stylesheet
