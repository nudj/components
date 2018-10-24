const React = require('react')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { mergeStyleSheets, css } = require('../../css')
const defaultStyleSheet = require('./style.css')

class Checkbox extends React.Component {
  static propTypes = {
    styleSheet: PropTypes.shape({
      root: CustomPropTypes.style,
      input: CustomPropTypes.style,
      icon: CustomPropTypes.style,
      iconBox: CustomPropTypes.style,
      iconCheckmark: CustomPropTypes.style,
      iconCheckmarkUnchecked: CustomPropTypes.style,
      iconCheckmarkChecked: CustomPropTypes.style,
      label: CustomPropTypes.style
    }),
    checked: PropTypes.bool,
    Wrapper: CustomPropTypes.component,
    onChange: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]),
    presentation: PropTypes.bool,
    nonsensitive: PropTypes.bool,
    required: PropTypes.bool
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
      required: false,
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
      indeterminate,
      disabled,
      required
    } = this.props

    const style = mergeStyleSheets(defaultStyleSheet, styleSheet)

    return (
      <Wrapper
        className={css(
          style.wrapper,
          disabled && style.disabled
        )}
      >
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
          disabled={disabled}
          required={required}
        />
        <label htmlFor={id} className={css(style.labelContainer)}>
          <svg className={css(style.icon)} viewBox='0 0 24 24'>
            <g transform='translate(4 4)' fill='none' fillRule='evenodd'>
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
          {label && (
            <span className={css(!nonsensitive && FS_HIDE_CLASS, style.label)}>{label}</span>
          )}
        </label>
      </Wrapper>
    )
  }
}

module.exports = Checkbox
