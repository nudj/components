const {
  StyleSheet,
  colors,
  typography,
  sizes
} = require('../../css')

const styleSheet = StyleSheet.create({
  wrapper: {
    position: 'relative',
    display: 'inline-block',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    color: colors.greyDarker,
    textAlign: 'center',
    ':first-child': {
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px'
    },
    ':last-child': {
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px'
    },
    ':hover': {
      borderColor: colors.greyLightest,
      backgroundColor: colors.greyLightest,
      cursor: 'pointer'
    }
  },
  checked: {
    color: colors.primary,
    borderColor: colors.primary,
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    ':hover': {
      color: colors.primary,
      borderColor: colors.primary,
      backgroundColor: 'transparent'
    }
  },
  input: {
    opacity: 0,
    position: 'absolute'
  },
  label: {
    ...typography.type.largeI,
    display: 'inline-block',
    paddingTop: sizes.smallIi,
    paddingRight: sizes.regular,
    paddingBottom: sizes.smallIi,
    paddingLeft: sizes.regular,
    cursor: 'pointer',
    width: '100%'
  }
})

module.exports = styleSheet
