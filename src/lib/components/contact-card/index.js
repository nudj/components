const React = require('react')
const chunk = require('lodash/chunk')
const uniqBy = require('lodash/uniqBy')
const method = require('lodash/method')
const PropTypes = require('prop-types')

const { css, mergeStyleSheets } = require('../../css')
const Card = require('../card')
const Pill = require('../pill')
const Text = require('../text')
const defaultStyleSheet = require('./style.css')

const renderContactInfo = (jobTitle, company) => {
  if (!jobTitle && !company) return ''
  if (!jobTitle) return company
  if (!company) return jobTitle
  return `${jobTitle} at ${company}`
}

const ContactCard = props => {
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
        {renderContactInfo(jobTitle, company)}
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

ContactCard.propTypes = {
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  recommendedFor: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  styleSheet: PropTypes.shape({
    root: PropTypes.string,
    name: PropTypes.string,
    attributes: PropTypes.string,
    recommendedForContainer: PropTypes.string,
    recommendedForHeading: PropTypes.string,
    recommendedForItem: PropTypes.string,
    children: PropTypes.string
  })
}

ContactCard.defaultProps = {
  meta: [],
  recommendedFor: [],
  styleSheet: {}
}

module.exports = ContactCard
