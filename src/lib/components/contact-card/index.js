// @flow
const React = require('react')
const chunk = require('lodash/chunk')
const uniqBy = require('lodash/uniqBy')
const method = require('lodash/method')

const { css, mergeStyleSheets } = require('../../css')
const Card = require('../card')
const Pill = require('../pill')
const Text = require('../text')
const defaultStyleSheet = require('./style.css')

type StyleSheetType = {
  root?: string,
  name?: string,
  attributes?: string,
  recommendedForContainer?: string,
  recommendedForHeading?: string,
  recommendedForItem?: string,
  children?: string
}

type ContactCardProps = {
  name: string,
  jobTitle: string,
  company: string,
  recommendedFor: Array<string>,
  children?: React.Node,
  styleSheet: StyleSheetType
}

const ContactCard = (props: ContactCardProps) => {
  const {
    name,
    jobTitle,
    company,
    recommendedFor,
    children,
    styleSheet
  } = props

  const [recommendations = []] = chunk(recommendedFor, 5)
  const otherRecommendationCount =
    recommendedFor.length - recommendations.length

  const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

  return (
    <Card style={style.root}>
      <Text element='div' size='largeI' style={style.name}>
        {name}
      </Text>
      <Text element='span' size='smallI' style={style.attributes}>
        {jobTitle} at {company}
      </Text>
      {recommendedFor.length > 0 && (
        <div className={css(style.recommendedForContainer)}>
          <Text
            element='div'
            size='smallIi'
            style={style.recommendedForHeading}
          >
            Recommended for
          </Text>
          <div className={css(style.recommendedForItems)}>
            {uniqBy(recommendations, method('toLowerCase'))
              .filter(recommendation => recommendation)
              .map(recommendation => (
                <Pill style={style.recommendedForItem} key={recommendation}>
                  {recommendation}
                </Pill>
              ))}
            {otherRecommendationCount > 0 && (
              <Pill style={style.recommendedForItem} volume='whisper'>
                + {otherRecommendationCount} others
              </Pill>
            )}
          </div>
        </div>
      )}
      {children && <div className={css(style.children)}>{children}</div>}
    </Card>
  )
}

ContactCard.defaultProps = {
  meta: [],
  recommendedFor: [],
  styleSheet: {}
}

module.exports = ContactCard
