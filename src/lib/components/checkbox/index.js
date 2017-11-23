// @flow
const React = require('react')
const { merge } = require('@nudj/library')

const getStyle = require('./style.css')

type ClassList = {
  root?: string,
  checkbox?: string,
  wrapper?: string,
  label?: string
}

type CheckboxProps = {
  classNames?: ClassList,
  checked: boolean,
  Wrapper?: Function,
  onChange: Function,
  id: string,
  name: string,
  value: string,
  label: string
}

const Checkbox = (props: CheckboxProps) => {
  const {
    classNames = {},
    label,
    Wrapper = props => <div {...props} />,
    checked,
    onChange,
    name,
    value,
    id
  } = props

  const onChangeHandler = event => {
    return onChange({
      name: event.target.name,
      value: event.target.value,
      checked: event.target.checked,
      preventDefault: event.preventDefault,
      stopPropagation: event.stopPropagation
    })
  }

  const defaultStyles = getStyle()
  const styles = merge(defaultStyles, classNames)

  return (
    <Wrapper className={styles.wrapper}>
      <input
        type='checkbox'
        name={name}
        value={value}
        className={styles.root}
        checked={checked}
        id={id}
        onChange={onChangeHandler}
      />
      <label htmlFor={id}>
        <svg className={styles.checkbox} width='1em' height='1em' viewBox='0 0 24 24'>
          <g transform='translate(3 4)' fill='none' fillRule='evenodd'>
            <rect
              stroke='#D5D5D3'
              strokeWidth={2}
              x={1}
              y={1}
              width={14}
              height={14}
              rx={4}
            />
            { checked ? <path d='M8 12L3 7l2-2 3 3 8-8 2 2z' fill='#E35205' /> : '' }
          </g>
        </svg>
        <span className={styles.label}>
          {label}
        </span>
      </label>
    </Wrapper>
  )
}

module.exports = Checkbox
