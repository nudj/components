const React = require('react')
const memoize = require('memoize-one').default

const { css, mergeStyleSheets } = require('../../css')
const mss = require('../../css/modifiers.css')
const defaultListItemStyleSheet = require('./style.css')

const getStyle = memoize((defaultStyleSheet, styleSheet) => {
  return mergeStyleSheets(defaultStyleSheet, styleSheet)
})

const ListItem = props => {
  const { styleSheet, children, joined } = props

  const listItemStyle = getStyle(defaultListItemStyleSheet, styleSheet)

  return (
    <div
      className={css(
        listItemStyle.root,
        joined ? listItemStyle.joined : listItemStyle.separate
      )}
    >
      <div className={css(listItemStyle.childrenContainer)}>
        {children}
      </div>
    </div>
  )
}
ListItem.defaultProps = {
  styleSheet: {},
  joined: false
}

const List = props => {
  const { children } = props

  return (
    <ul className={css(mss.pl0)}>
      {children && children(ListItem)}
    </ul>
  )
}

module.exports = List
