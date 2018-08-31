const { StyleSheet } = require('./')
const colors = require('./colors')
const sizes = require('./sizes')
const typography = require('./typography')

const modifiers = StyleSheet.create({
  // Padding
  pt0: { paddingTop: '0' },
  pr0: { paddingRight: '0' },
  pb0: { paddingBottom: '0' },
  pl0: { paddingLeft: '0' },
  pa0: {
    paddingTop: '0',
    paddingRight: '0',
    paddingBottom: '0',
    paddingLeft: '0'
  },
  ptSmIii: { paddingTop: sizes.smallIii },
  prSmIii: { paddingRight: sizes.smallIii },
  pbSmIii: { paddingBottom: sizes.smallIii },
  plSmIii: { paddingLeft: sizes.smallIii },
  paSmIii: {
    paddingTop: sizes.smallIii,
    paddingRight: sizes.smallIii,
    paddingBottom: sizes.smallIii,
    paddingLeft: sizes.smallIii
  },
  ptSmIi: { paddingTop: sizes.smallIi },
  prSmIi: { paddingRight: sizes.smallIi },
  pbSmIi: { paddingBottom: sizes.smallIi },
  plSmIi: { paddingLeft: sizes.smallIi },
  paSmIi: {
    paddingTop: sizes.smallIi,
    paddingRight: sizes.smallIi,
    paddingBottom: sizes.smallIi,
    paddingLeft: sizes.smallIi
  },
  ptSmI: { paddingTop: sizes.smallI },
  prSmI: { paddingRight: sizes.smallI },
  pbSmI: { paddingBottom: sizes.smallI },
  plSmI: { paddingLeft: sizes.smallI },
  paSmI: {
    paddingTop: sizes.smallI,
    paddingRight: sizes.smallI,
    paddingBottom: sizes.smallI,
    paddingLeft: sizes.smallI
  },
  ptReg: { paddingTop: sizes.regular },
  prReg: { paddingRight: sizes.regular },
  pbReg: { paddingBottom: sizes.regular },
  plReg: { paddingLeft: sizes.regular },
  paReg: {
    paddingTop: sizes.regular,
    paddingRight: sizes.regular,
    paddingBottom: sizes.regular,
    paddingLeft: sizes.regular
  },
  ptLgI: { paddingTop: sizes.largeI },
  prLgI: { paddingRight: sizes.largeI },
  pbLgI: { paddingBottom: sizes.largeI },
  plLgI: { paddingLeft: sizes.largeI },
  paLgI: {
    paddingTop: sizes.largeI,
    paddingRight: sizes.largeI,
    paddingBottom: sizes.largeI,
    paddingLeft: sizes.largeI
  },
  ptLgIi: { paddingTop: sizes.largeIi },
  prLgIi: { paddingRight: sizes.largeIi },
  pbLgIi: { paddingBottom: sizes.largeIi },
  plLgIi: { paddingLeft: sizes.largeIi },
  paLgIi: {
    paddingTop: sizes.largeIi,
    paddingRight: sizes.largeIi,
    paddingBottom: sizes.largeIi,
    paddingLeft: sizes.largeIi
  },
  ptLgIii: { paddingTop: sizes.largeIii },
  prLgIii: { paddingRight: sizes.largeIii },
  pbLgIii: { paddingBottom: sizes.largeIii },
  plLgIii: { paddingLeft: sizes.largeIii },
  paLgIii: {
    paddingTop: sizes.largeIii,
    paddingRight: sizes.largeIii,
    paddingBottom: sizes.largeIii,
    paddingLeft: sizes.largeIii
  },
  ptLgIv: { paddingTop: sizes.largeIv },
  prLgIv: { paddingRight: sizes.largeIv },
  pbLgIv: { paddingBottom: sizes.largeIv },
  plLgIv: { paddingLeft: sizes.largeIv },
  paLgIv: {
    paddingTop: sizes.largeIv,
    paddingRight: sizes.largeIv,
    paddingBottom: sizes.largeIv,
    paddingLeft: sizes.largeIv
  },
  ptLgV: { paddingTop: sizes.largeV },
  prLgV: { paddingRight: sizes.largeV },
  pbLgV: { paddingBottom: sizes.largeV },
  plLgV: { paddingLeft: sizes.largeV },
  paLgV: {
    paddingTop: sizes.largeV,
    paddingRight: sizes.largeV,
    paddingBottom: sizes.largeV,
    paddingLeft: sizes.largeV
  },
  ptLgVi: { paddingTop: sizes.largeVi },
  prLgVi: { paddingRight: sizes.largeVi },
  pbLgVi: { paddingBottom: sizes.largeVi },
  plLgVi: { paddingLeft: sizes.largeVi },
  paLgVi: {
    paddingTop: sizes.largeVi,
    paddingRight: sizes.largeVi,
    paddingBottom: sizes.largeVi,
    paddingLeft: sizes.largeVi
  },

  // Margin
  mt0: { marginTop: '0' },
  mr0: { marginRight: '0' },
  mb0: { marginBottom: '0' },
  ml0: { marginLeft: '0' },
  ma0: {
    marginTop: '0',
    marginRight: '0',
    marginBottom: '0',
    marginLeft: '0'
  },
  mtSmIii: { marginTop: sizes.smallIii },
  mrSmIii: { marginRight: sizes.smallIii },
  mbSmIii: { marginBottom: sizes.smallIii },
  mlSmIii: { marginLeft: sizes.smallIii },
  maSmIii: {
    marginTop: sizes.smallIii,
    marginRight: sizes.smallIii,
    marginBottom: sizes.smallIii,
    marginLeft: sizes.smallIii
  },
  mtSmIi: { marginTop: sizes.smallIi },
  mrSmIi: { marginRight: sizes.smallIi },
  mbSmIi: { marginBottom: sizes.smallIi },
  mlSmIi: { marginLeft: sizes.smallIi },
  maSmIi: {
    marginTop: sizes.smallIi,
    marginRight: sizes.smallIi,
    marginBottom: sizes.smallIi,
    marginLeft: sizes.smallIi
  },
  mtSmI: { marginTop: sizes.smallI },
  mrSmI: { marginRight: sizes.smallI },
  mbSmI: { marginBottom: sizes.smallI },
  mlSmI: { marginLeft: sizes.smallI },
  maSmI: {
    marginTop: sizes.smallI,
    marginRight: sizes.smallI,
    marginBottom: sizes.smallI,
    marginLeft: sizes.smallI
  },
  mtReg: { marginTop: sizes.regular },
  mrReg: { marginRight: sizes.regular },
  mbReg: { marginBottom: sizes.regular },
  mlReg: { marginLeft: sizes.regular },
  maReg: {
    marginTop: sizes.regular,
    marginRight: sizes.regular,
    marginBottom: sizes.regular,
    marginLeft: sizes.regular
  },
  mtLgI: { marginTop: sizes.largeI },
  mrLgI: { marginRight: sizes.largeI },
  mbLgI: { marginBottom: sizes.largeI },
  mlLgI: { marginLeft: sizes.largeI },
  maLgI: {
    marginTop: sizes.largeI,
    marginRight: sizes.largeI,
    marginBottom: sizes.largeI,
    marginLeft: sizes.largeI
  },
  mtLgIi: { marginTop: sizes.largeIi },
  mrLgIi: { marginRight: sizes.largeIi },
  mbLgIi: { marginBottom: sizes.largeIi },
  mlLgIi: { marginLeft: sizes.largeIi },
  maLgIi: {
    marginTop: sizes.largeIi,
    marginRight: sizes.largeIi,
    marginBottom: sizes.largeIi,
    marginLeft: sizes.largeIi
  },
  mtLgIii: { marginTop: sizes.largeIii },
  mrLgIii: { marginRight: sizes.largeIii },
  mbLgIii: { marginBottom: sizes.largeIii },
  mlLgIii: { marginLeft: sizes.largeIii },
  maLgIii: {
    marginTop: sizes.largeIii,
    marginRight: sizes.largeIii,
    marginBottom: sizes.largeIii,
    marginLeft: sizes.largeIii
  },
  mtLgIv: { marginTop: sizes.largeIv },
  mrLgIv: { marginRight: sizes.largeIv },
  mbLgIv: { marginBottom: sizes.largeIv },
  mlLgIv: { marginLeft: sizes.largeIv },
  maLgIv: {
    marginTop: sizes.largeIv,
    marginRight: sizes.largeIv,
    marginBottom: sizes.largeIv,
    marginLeft: sizes.largeIv
  },
  mtLgV: { marginTop: sizes.largeV },
  mrLgV: { marginRight: sizes.largeV },
  mbLgV: { marginBottom: sizes.largeV },
  mlLgV: { marginLeft: sizes.largeV },
  maLgV: {
    marginTop: sizes.largeV,
    marginRight: sizes.largeV,
    marginBottom: sizes.largeV,
    marginLeft: sizes.largeV
  },
  mtLgVi: { marginTop: sizes.largeVi },
  mrLgVi: { marginRight: sizes.largeVi },
  mbLgVi: { marginBottom: sizes.largeVi },
  mlLgVi: { marginLeft: sizes.largeVi },
  maLgVi: {
    marginTop: sizes.largeVi,
    marginRight: sizes.largeVi,
    marginBottom: sizes.largeVi,
    marginLeft: sizes.largeVi
  },
  // Colors
  fgRoyalBlue: { color: colors.royalBlue },
  fgMidRed: { color: colors.midRed },
  fgPink: { color: colors.pink },
  fgCharcoal: { color: colors.charcoal },
  fgPrimaryDark: { color: colors.primaryDark },
  fgPrimary: { color: colors.primary },
  fgPrimaryLight: { color: colors.primaryLight },
  fgSecondaryDark: { color: colors.secondaryDark },
  fgSecondary: { color: colors.secondary },
  fgSecondaryLight: { color: colors.secondaryLight },
  fgSuccessDark: { color: colors.successDark },
  fgSuccess: { color: colors.success },
  fgSuccessLight: { color: colors.successLight },
  fgWarningDark: { color: colors.warningDark },
  fgWarning: { color: colors.warning },
  fgWarningLight: { color: colors.warningLight },
  fgDangerDark: { color: colors.dangerDark },
  fgDanger: { color: colors.danger },
  fgDangerLight: { color: colors.dangerLight },
  fgText: { color: colors.text },
  fgBlack: { color: colors.black },
  fgGreyDarkest: { color: colors.greyDarkest },
  fgGreyDarker: { color: colors.greyDarker },
  fgGreyDark: { color: colors.greyDark },
  fgGrey: { color: colors.grey },
  fgGreyLight: { color: colors.greyLight },
  fgGreyLightest: { color: colors.greyLightest },
  fgWhite: { color: colors.white },
  bgRoyalBlue: { backgroundColor: colors.royalBlue },
  bgMidRed: { backgroundColor: colors.midRed },
  bgPink: { backgroundColor: colors.pink },
  bgCharcoal: { backgroundColor: colors.charcoal },
  bgPrimaryDark: { backgroundColor: colors.primaryDark },
  bgPrimary: { backgroundColor: colors.primary },
  bgPrimaryLight: { backgroundColor: colors.primaryLight },
  bgSecondaryDark: { backgroundColor: colors.secondaryDark },
  bgSecondary: { backgroundColor: colors.secondary },
  bgSecondaryLight: { backgroundColor: colors.secondaryLight },
  bgSuccessDark: { backgroundColor: colors.successDark },
  bgSuccess: { backgroundColor: colors.success },
  bgSuccessLight: { backgroundColor: colors.successLight },
  bgWarningDark: { backgroundColor: colors.warningDark },
  bgWarning: { backgroundColor: colors.warning },
  bgWarningLight: { backgroundColor: colors.warningLight },
  bgDangerDark: { backgroundColor: colors.dangerDark },
  bgDanger: { backgroundColor: colors.danger },
  bgDangerLight: { backgroundColor: colors.dangerLight },
  bgText: { backgroundColor: colors.text },
  bgBlack: { backgroundColor: colors.black },
  bgGreyDarkest: { backgroundColor: colors.greyDarkest },
  bgGreyDarker: { backgroundColor: colors.greyDarker },
  bgGreyDark: { backgroundColor: colors.greyDark },
  bgGrey: { backgroundColor: colors.grey },
  bgGreyLight: { backgroundColor: colors.greyLight },
  bgGreyLightest: { backgroundColor: colors.greyLightest },
  bgWhite: { backgroundColor: colors.white },

  // Typography
  lgVi: {
    fontFamily: typography.fontFamily.jan,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.largeVi,
    lineHeight: typography.lineHeight.largeVi,
    letterSpacing: typography.letterSpacing.largeVi
  },
  lgV: {
    fontFamily: typography.fontFamily.jan,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.largeV,
    lineHeight: typography.lineHeight.largeV,
    letterSpacing: typography.letterSpacing.largeV
  },
  lgIv: {
    fontFamily: typography.fontFamily.jan,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.largeIv,
    lineHeight: typography.lineHeight.largeIv,
    letterSpacing: typography.letterSpacing.largeIv
  },
  lgIii: {
    fontFamily: typography.fontFamily.jan,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.largeIii,
    lineHeight: typography.lineHeight.largeIii,
    letterSpacing: typography.letterSpacing.largeIii
  },
  lgIi: {
    fontFamily: typography.fontFamily.jan,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.largeIi,
    lineHeight: typography.lineHeight.largeIi,
    letterSpacing: typography.letterSpacing.largeIi
  },
  lgI: {
    fontFamily: typography.fontFamily.jan,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.largeI,
    lineHeight: typography.lineHeight.largeI,
    letterSpacing: typography.letterSpacing.largeI
  },
  reg: {
    fontFamily: typography.fontFamily.jan,
    fontWeight: typography.fontWeight.light,
    fontSize: typography.fontSize.regular,
    lineHeight: typography.lineHeight.regular,
    letterSpacing: typography.letterSpacing.regular
  },
  smI: {
    fontFamily: typography.fontFamily.jan,
    fontWeight: typography.fontWeight.light,
    fontSize: typography.fontSize.smallI,
    lineHeight: typography.lineHeight.smallI,
    letterSpacing: typography.letterSpacing.smallI
  },
  smIi: {
    fontFamily: typography.fontFamily.jan,
    fontWeight: typography.fontWeight.light,
    fontSize: typography.fontSize.smallIi,
    lineHeight: typography.lineHeight.smallIi,
    letterSpacing: typography.letterSpacing.smallIi
  },

  bold: { fontWeight: typography.fontWeight.bold },
  light: { fontWeight: typography.fontWeight.light },

  noUnderline: { textDecoriation: 'none' },
  underline: { textDecoriation: 'underline' },

  uppercase: { textTransform: 'uppercase' },
  lowercase: { textTransform: 'lowercase' },
  sentencecase: { textTransform: 'normal' },

  wrap: { whiteSpace: 'normal' },
  nowrap: { whiteSpace: 'nowrap' },

  i: { fontStyle: 'italic' },
  roman: { fontStyle: 'normal' },

  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },

  // Display
  dib: { display: 'inline-block' },
  di: { display: 'inline' },
  db: { display: 'block' },

  // Position
  relative: { position: 'relative' },
  absolute: { position: 'absolute' },
  static: { position: 'static' },
  fixed: { position: 'absolute' },

  // Misc
  ofHide: { overflow: 'hidden' },
  rotate90: { transform: 'rotate(90deg)' },
  rotate180: { transform: 'rotate(180deg)' },
  rotate270: { transform: 'rotate(270deg)' }
})

module.exports = modifiers
