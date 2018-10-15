const { StyleSheet, colors, sizes, utilities } = require('../../css')

const stylesheet = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    listStyle: 'none',
    backgroundColor: colors.white,
    boxShadow: utilities.boxShadow[10].narrow
  },
  joined: {
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    ':nth-child(n+2)': {
      borderTopColor: colors.greyLight,
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0'
    },
    ':last-child': {
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px'
    },
    ':first-child > :first-child ': {
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '0'
    },
    ':nth-child(n+2) > :first-child': {
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0'
    },
    ':last-child > :first-child': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: '4px'
    }
  },
  separate: {
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    ':nth-child(n+2)': {
      marginTop: sizes.regular,
      borderTopWidth: '0'
    },
    ':nth-child(n) > :first-child ': {
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px'
    }
  },
  childrenContainer: {
    flexGrow: 1
  }
})

module.exports = stylesheet
