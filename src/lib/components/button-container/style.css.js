const { StyleSheet } = require('../../css')

const styleSheet = StyleSheet.create({
  root: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    fontSize: '1em',
    verticalAlign: 'top',
    textAlign: 'left',
    cursor: 'pointer',
    width: 'auto',
    background: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    color: 'currentColor',
    ':hover': {
      background: 'transparent',
      borderColor: 'transparent',
      color: 'currentColor'
    },
    ':focus': {
      background: 'transparent',
      borderColor: 'transparent',
      color: 'currentColor'
    },
    ':active': {
      background: 'transparent',
      borderColor: 'transparent',
      color: 'currentColor'
    }
  }
})

module.exports = styleSheet
