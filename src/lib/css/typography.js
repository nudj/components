const fontFamily = {
  jan: [
    // TODO: Remove
    // Local copy
    'f37 jan',
    // @font-face copy
    '"jan"',
    '"-apple-system"',
    '"BlinkMacSystemFont"',
    '"helvetica neue"',
    '"helvetica"',
    '"roboto"',
    '"arial"',
    '"sans-serif"'
  ].join(', ')
}

const fontWeight = {
  bold: 700,
  light: 200
}

const fontSize = {
  largeVi: '2.875rem',
  largeV: '2.625rem',
  largeIv: '1.875rem',
  largeIii: '1.625rem',
  largeIi: '1.5rem',
  largeI: '1.125rem',
  regular: '1rem',
  smallI: '0.875rem',
  smallIi: '0.75rem'
}

const lineHeight = {
  largeVi: 1.5,
  larveV: 1.5,
  largeIv: 1.5,
  largeIii: 1.5,
  largeIi: 1.5,
  largeI: 1.5,
  regular: 1.5,
  smallI: 1.5,
  smallIi: 1.5
}

const letterSpacing = {
  largeVi: 1,
  larveV: 1,
  largeIv: 1,
  largeIii: 1,
  largeIi: 1,
  largeI: 1,
  regular: 1,
  smallI: 1,
  smallIi: 1
}

const type = {
  largeVi: {
    fontFamily: fontFamily.jan,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.largeVi,
    lineHeight: lineHeight.largeVi,
    letterSpacing: letterSpacing.largeVi
  },
  largeV: {
    fontFamily: fontFamily.jan,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.largeV,
    lineHeight: lineHeight.largeV,
    letterSpacing: letterSpacing.largeV
  },
  largeIv: {
    fontFamily: fontFamily.jan,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.largeIv,
    lineHeight: lineHeight.largeIv,
    letterSpacing: letterSpacing.largeIv
  },
  largeIii: {
    fontFamily: fontFamily.jan,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.largeIii,
    lineHeight: lineHeight.largeIii,
    letterSpacing: letterSpacing.largeIii
  },
  largeIi: {
    fontFamily: fontFamily.jan,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.largeIi,
    lineHeight: lineHeight.largeIi,
    letterSpacing: letterSpacing.largeIi
  },
  largeI: {
    fontFamily: fontFamily.jan,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.largeI,
    lineHeight: lineHeight.largeI,
    letterSpacing: letterSpacing.largeI
  },
  regular: {
    fontFamily: fontFamily.jan,
    fontWeight: fontWeight.light,
    fontSize: fontSize.regular,
    lineHeight: lineHeight.regular,
    letterSpacing: letterSpacing.regular
  },
  smallI: {
    fontFamily: fontFamily.jan,
    fontWeight: fontWeight.light,
    fontSize: fontSize.smallI,
    lineHeight: lineHeight.smallI,
    letterSpacing: letterSpacing.smallI
  },
  smallIi: {
    fontFamily: fontFamily.jan,
    fontWeight: fontWeight.light,
    fontSize: fontSize.smallIi,
    lineHeight: lineHeight.smallIi,
    letterSpacing: letterSpacing.smallIi
  }
}

module.exports = {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  type
}
