// Named / brand colours
const royalBlue = '#002D72'
const midRed = '#E35205'
const charcoal = '#2D2926'

// Palette
const blueDark = '#001459'
const blue = royalBlue
const blueLight = '#1A4280'
const redDark = '#CA3900'
const red = midRed
const redLight = '#FD6C1F'
const pinkDark = '#D64860'
const pink = '#EF6079'
const pinkLight = '#FF7A93'
const greenDark = '#61AE36'
const green = '#7AC74F'
const greenLight = '#94E169'
const yellowDark = '#DED12F'
const yellow = '#F7EA48'
const yellowLight = '#FFFF62'
const black = '#000'
const greyDarkest = charcoal
const greyDarker = '#423F3C'
const greyDark = '#ABA9A8'
const grey = '#D0D0CE'
const greyLight = '#ECECEB'
const greyLightest = '#F7F7F6'
const white = '#FFFFFF'

// External
const whatsapp = '#25D366'
const whatsappLight = '#00e676'
const facebook = '#334F8D'
const facebookLight = '#4267b2'
const messenger = '#0084FF'
const messengerLight = '#339dff'
const twitter = '#1A97F1'
const twitterLight = '#48acf4'
const gmail = '#d4584a'
const gmailLight = '#d0796b'
const linkedin = '#0077b5'
const linkedinLight = '#008cc9'

const background = {
  blue: '#F7F8FA'
}

const overlay = {
  // greyDarker @ 50% opacity
  50: 'rgba(66, 63, 60, 0.5)'
}

module.exports = {
  // Brand
  royalBlue: royalBlue,
  midRed: midRed,
  pink: pink,
  charcoal: charcoal,

  // Interface aliases
  primaryDark: blueDark,
  primary: blue,
  primaryLight: blueLight,
  secondaryDark: pinkDark,
  secondary: pink,
  secondaryLight: pinkLight,
  successDark: greenDark,
  success: green,
  successLight: greenLight,
  warningDark: yellowDark,
  warning: yellow,
  warningLight: yellowLight,
  dangerDark: redDark,
  danger: red,
  dangerLight: redLight,
  text: charcoal,

  // Greys
  black: black,
  greyDarkest: greyDarkest,
  greyDarker: greyDarker,
  greyDark: greyDark,
  grey: grey,
  greyLight: greyLight,
  greyLightest: greyLightest,
  white: white,

  // Backgrounds
  background,

  // Overlays
  overlay,

  // External
  whatsapp,
  whatsappLight,
  facebook,
  facebookLight,
  messenger,
  messengerLight,
  twitter,
  twitterLight,
  gmail,
  gmailLight,
  linkedin,
  linkedinLight
}
