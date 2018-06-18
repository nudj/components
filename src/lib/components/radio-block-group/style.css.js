const {
  StyleSheet,
  colors
} = require('../../css')

const styleSheet = StyleSheet.create({
  root: {
    position: 'relative',
    boxShadow: `0 0 0 1px ${colors.greyLight}`,
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    display: 'flex'
  }
})

module.exports = styleSheet
