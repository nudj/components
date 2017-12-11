const { merge } = require('@nudj/library')

const { StyleSheet, colors, typography, sizes } = require('../../css')

const stylesheet = StyleSheet.create({
  root: merge(typography.type.regular, {
    border: `1px solid`,
    borderRadius: sizes.largeIi,
    cursor: 'default',
    fontWeight: typography.fontWeight.bold,
    paddingTop: sizes.smallI,
    paddingRight: sizes.largeI,
    paddingBottom: sizes.smallI,
    paddingLeft: sizes.largeI,
    textAlign: 'center',
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
  yell: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    color: colors.white,
    ':hover': {
      backgroundColor: colors.secondaryLight,
      borderColor: colors.secondaryLight
    },
    ':focus': {
      backgroundColor: colors.secondaryLight,
      borderColor: colors.secondaryLight
    }
  },
  whistle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: colors.primary,
    textDecoration: 'underline',
    ':hover': {
      color: colors.primaryLight
    },
    ':focus': {
      color: colors.primaryLight
    },
    ':active': {
      boxShadow: 'none'
    }
  },
  whisper: {
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
    },
    ':active': {
      boxShadow: 'none'
    }
  }
})

module.exports = stylesheet
