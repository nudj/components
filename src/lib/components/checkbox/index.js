const React = require('react')
const PropTypes = require('prop-types')

const { ComponentPropType, StyleSheetType } = require('../../helpers/prop-types')
const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')

class Checkbox extends React.Component {
  static propTypes = {
    styleSheet: PropTypes.shape({
      root: StyleSheetType,
      input: StyleSheetType,
      icon: StyleSheetType,
      iconBox: StyleSheetType,
      iconCheckmark: StyleSheetType,
      iconCheckmarkUnchecked: StyleSheetType,
      iconCheckmarkChecked: StyleSheetType,
      label: StyleSheetType
    }),
    checked: PropTypes.bool,
    Wrapper: ComponentPropType,
    onChange: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    presentation: PropTypes.bool,
    nonsensitive: PropTypes.bool
  }

  static defaultProps = {
    styleSheet: {},
    Wrapper: 'div',
    onChange: () => {},
    indeterminate: false,
    nonsensitive: FS_SHOW
  }

  componentDidMount () {
    if (this.checkbox) {
      this.checkbox.indeterminate = this.props.indeterminate
    }
  }

  /**
   * https://github.com/facebook/react/issues/1798#issuecomment-333414857
   */
  componentDidUpdate (prevProps) {
    const { indeterminate } = this.props

    if (prevProps.indeterminate !== indeterminate && this.checkbox) {
      this.checkbox.indeterminate = indeterminate
    }
  }

  handleChange = event => {
    const { onChange } = this.props

    onChange({
      name: event.target.name,
      value: event.target.value,
      checked: event.target.checked,
      preventDefault: event.preventDefault,
      stopPropagation: event.stopPropagation,
      indeterminate: false
    })
  }

  render () {
    const {
      styleSheet,
      label,
      Wrapper,
      checked,
      name,
      value,
      id,
      presentation,
      nonsensitive,
      indeterminate
    } = this.props

    const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

    return (
      <Wrapper className={css(style.wrapper)}>
        <input
          type='checkbox'
          name={name}
          value={value}
          className={css(style.input)}
          checked={checked}
          id={id}
          onChange={this.handleChange}
          tabIndex={presentation ? -1 : 0}
          ref={el => { this.checkbox = el }}
        />
        <label htmlFor={id} className={css(style.labelContainer)}>
          <svg className={css(style.icon)} viewBox='0 0 24 24'>
            <g transform='translate(3 4)' fill='none' fillRule='evenodd'>
              <rect
                className={css(style.iconBox)}
                x={1}
                y={1}
                width={14}
                height={14}
                rx={4}
              />
              <path
                className={css(
                  style.iconCheckmark,
                  checked
                    ? style.iconCheckmarkChecked
                    : style.iconCheckmarkUnchecked
                )}
                d='M8 12L3 7l2-2 3 3 8-8 2 2z'
              />
              <rect
                className={css(
                  style.iconSquare,
                  indeterminate
                    ? style.iconSquareIndeterminate
                    : style.iconSquareDeterminate
                )}
                x='4'
                y='4'
                width='8'
                height='8'
                rx='2'
              />
            </g>
          </svg>
          <span className={css(!nonsensitive && FS_HIDE_CLASS, style.label)}>{label}</span>
        </label>
      </Wrapper>
    )
  }
}

module.exports = Checkbox
