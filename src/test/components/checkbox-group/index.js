/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const CheckboxGroup = require('../../../lib/components/checkbox-group')

const ExampleComponent = (props) => (
  <CheckboxGroup {...props}>
    {
      checkbox => (
        <span>
          { checkbox({ value: '0', label: 'One' }) }
          { checkbox({ value: '1', label: 'Two' }) }
          { checkbox({ value: '2', label: 'Three' }) }
        </span>
      )
    }
  </CheckboxGroup>
)

const createCheckboxGroup = (properties = {}) => {
  const {
    values = [],
    name = 'Example Name',
    onChange = () => {},
    required = false
  } = properties

  const component = shallow(
    <ExampleComponent
      onChange={onChange}
      name={name}
      values={values}
      required={required}
    />
  )
  return component.dive().children()
}

describe.only('CheckboxGroup', () => {
  describe('rendering', () => {
    it('renders provided children', () => {
      const CheckboxGroup = createCheckboxGroup()
      const checkboxes = CheckboxGroup.children()
      expect(checkboxes).to.have.lengthOf(3)
      checkboxes.forEach(checkbox => {
        expect(checkbox.name()).to.equal('Checkbox')
      })
    })
  })

  describe('props', () => {
    it('spreads name and required props to children', () => {
      const CheckboxGroup = createCheckboxGroup({
        name: 'Example',
        required: true
      })
      CheckboxGroup.children().forEach(checkbox => {
        expect(checkbox.props().name).to.equal('Example')
        expect(checkbox.props().required).to.equal(true)
      })
    })

    it('uses array of values to determine checked state of children', () => {
      const OneCheckedGroup = createCheckboxGroup({ values: ['1'] })
      const AllCheckedGroup = createCheckboxGroup({ values: ['0', '1', '2'] })
      const oneCheckedValues = OneCheckedGroup.children().map(checkbox => {
        return checkbox.props().checked
      })
      const allCheckedValues = AllCheckedGroup.children().map(checkbox => {
        return checkbox.props().checked
      })
      expect(oneCheckedValues).to.deep.equal([false, true, false])
      expect(allCheckedValues).to.deep.equal([true, true, true])
    })
  })
})
