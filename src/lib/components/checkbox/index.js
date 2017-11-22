// @flow
const React = require('react')
const classnames = require('classnames')
// const { merge } = require('@nudj/library')

// const getStyle = require('./style.css')

type ClassList = {
  root?: string,
  wrapper?: string
}

type CheckboxProps = {
  classNames?: ClassList,
  checked: boolean,
  Wrapper?: Function,
  onChange: Function,
  id?: string
}

const Checkbox = (props: CheckboxProps) => {
  const {
    classNames = {},
    Wrapper = props => <div {...props} />,
    checked,
    onChange,
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

  // const defaultStyles = getStyle()
  const styles = classNames // merge(classNames, defaultStyles)

  return (
    <Wrapper className={classnames(styles.wrapper)}>
      <input
        type='checkbox'
        className={classnames(styles.root)}
        checked={checked}
        id={id}
        onChange={onChangeHandler}
      />
    </Wrapper>
  )
}

module.exports = Checkbox
