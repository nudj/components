const { merge } = require('@nudj/library')

const { StyleSheet, colors, sizes, typography } = require('../../css')

const styleSheet = StyleSheet.create({
  wrapper: {
    position: 'relative',
    display: 'inline-block',
    ':nth-child(n+2) label': {
      borderLeftWidth: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    ':first-child label': {
      borderTopLeftRadius: sizes.largeIi,
      borderBottomLeftRadius: sizes.largeIi,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    ':last-child label': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: sizes.largeIi,
      borderBottomRightRadius: sizes.largeIi
    }
  },
  input: {
    opacity: 0,
    position: 'absolute',
    cursor: 'inherit'
  },
  label: merge(typography.type.regular, {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.primary,
    borderRadius: sizes.largeIi,
    cursor: 'default',
    display: 'inline-block',
    fontWeight: typography.fontWeight.bold,
    paddingTop: sizes.smallIi,
    paddingRight: sizes.largeI,
    paddingBottom: sizes.smallIi,
    paddingLeft: sizes.largeI,
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'backgroundColor 150ms',
    width: '100%',
    color: colors.primary,
    ':active': {
      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
    },
    ':hover': {
      color: colors.primaryLight
    },
    ':focus': {
      color: colors.primaryLight
    }
  }),
  labelChecked: {
    backgroundColor: colors.primary,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.primaryLight,
      color: colors.white
    },
    ':focus': {
      backgroundColor: colors.primaryLight,
      color: colors.white
    }
  }
})

module.exports = styleSheet
