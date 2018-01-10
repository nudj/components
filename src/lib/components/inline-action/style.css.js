const { merge } = require('@nudj/library')

const { StyleSheet, colors, typography, sizes } = require('../../css')

module.exports.buttonStyleSheet = StyleSheet.create({
  root: merge(typography.type.regular, {
    border: `1px solid`,
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
    transition: 'all 150ms',
    ':active': {
      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
    }
  }),
  murmur: {
    backgroundColor: colors.greyLight,
    borderColor: colors.greyLight,
    color: colors.text,
    ':hover': {
      backgroundColor: colors.greyLightest,
      borderColor: colors.greyLightest
    },
    ':focus': {
      backgroundColor: colors.greyLightest,
      borderColor: colors.greyLightest
    }
  },
  cheer: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.primaryLight,
      borderColor: colors.primaryLight
    },
    ':focus': {
      backgroundColor: colors.primaryLight,
      borderColor: colors.primaryLight
    }
  },
  shout: {
    backgroundColor: colors.success,
    borderColor: colors.success,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.successLight,
      borderColor: colors.successLight
    },
    ':focus': {
      backgroundColor: colors.successLight,
      borderColor: colors.successLight
    }
  },
  scream: {
    backgroundColor: colors.danger,
    borderColor: colors.danger,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.dangerLight,
      borderColor: colors.dangerLight
    },
    ':focus': {
      backgroundColor: colors.dangerLight,
      borderColor: colors.dangerLight
    }
  },
  disabled: {
    pointerEvents: 'none',
    opacity: 0.25
  }
})

module.exports.linkStyleSheet = StyleSheet.create({
  root: merge(typography.type.regular, {
    display: 'inline-block',
    fontWeight: typography.fontWeight.bold,
    paddingTop: sizes.smallI,
    paddingRight: sizes.largeI,
    paddingBottom: sizes.smallI,
    paddingLeft: sizes.largeI,
    textAlign: 'center',
    transition: 'all 150ms',
    borderWidth: 0,
    cursor: 'pointer',
    textDecoration: 'underline',
    backgroundColor: 'transparent'
  }),
  murmur: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: colors.greyDark,
    cursor: 'pointer',
    textDecoration: 'underline',
    ':hover': {
      color: colors.grey
    },
    ':focus': {
      color: colors.grey
    }
  },
  cheer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: colors.primary,
    textDecoration: 'underline',
    ':hover': {
      color: colors.primaryLight
    },
    ':focus': {
      color: colors.primaryLight
    }
  },
  shout: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: colors.success,
    textDecoration: 'underline',
    ':hover': {
      color: colors.successLight
    },
    ':focus': {
      color: colors.successLight
    }
  },
  scream: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: colors.danger,
    textDecoration: 'underline',
    ':hover': {
      color: colors.dangerLight
    },
    ':focus': {
      color: colors.dangerLight
    }
  },
  disabled: {
    pointerEvents: 'none',
    opacity: 0.25
  }
})
