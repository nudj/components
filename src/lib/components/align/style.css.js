const { StyleSheet } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {
    display: 'table',
    width: '100%'
  },
  left: {
    display: 'table-cell',
    width: '1%',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap'
  },
  right: {
    display: 'table-cell',
    width: '1%',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap'
  },
  large: {
    width: '99%',
    whiteSpace: 'inherit'
  }
})

module.exports = stylesheet
