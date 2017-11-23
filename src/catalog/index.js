import React from 'react'
import ReactDOM from 'react-dom'
import { Catalog } from 'catalog'
import colors from '../lib/css/colors'
import { fontFamily } from '../lib/css/typography'

const pages = [
  {
    path: '/',
    title: 'Overview',
    pages: require('./pages/overview')
  },
  {
    path: '/patterns',
    title: 'Patterns',
    pages: require('./pages/patterns')
  }
]

const theme = {
  fontFamily: fontFamily.jan,
  fontHeading: fontFamily.jan,
  background: colors.white,
  textColor: colors.greyDarkest,
  brandColor: colors.primary,
  linkColor: colors.black,
  lightColor: colors.greyLightest,
  pageHeadingBackground: colors.white,
  pageHeadingTextColor: colors.primary,
  pageHeadingHeight: 125,
  sidebarColor: colors.black,
  sidebarColorActive: colors.greyDarkest,
  sidebarColorText: colors.white,
  sidebarColorTextActive: colors.white,
  sidebarColorLine: colors.black,
  sidebarColorHeading: colors.white
}

ReactDOM.render(
  <Catalog title='Pattern library' pages={pages} theme={theme} />,
  document.getElementById('catalog')
)
