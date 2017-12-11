/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const CheckboxGroup = require('../../../lib/components/checkbox-group')

describe('CheckboxGroup', () => {
  it('renders', () => {
    shallow(
      <CheckboxGroup name='checkboxgroup' onChange={() => {}} values={['1']}>
        {Checkbox => <Checkbox value='1' label='One' />}
      </CheckboxGroup>
    )
  })

  describe('props', () => {
    it('correctly sets the checked values', () => {
      let wrapper
      const component = shallow(
        <CheckboxGroup name='checkboxgroup' onChange={() => {}} values={['1']}>
          {Checkbox => {
            wrapper = Checkbox
            return <Checkbox value='1' label='One' />
          }}
        </CheckboxGroup>
      )

      const checkbox = component.find(wrapper).dive()
      expect(checkbox.props().checked).to.be.true()
    })

    it('takes an onChange function', () => {
      let wrapper
      const onChange = sinon.stub()
      const component = shallow(
        <CheckboxGroup name='checkboxgroup' onChange={onChange} values={[]}>
          {Checkbox => {
            wrapper = Checkbox
            return <Checkbox value='1' label='One' />
          }}
        </CheckboxGroup>
      )

      const event = {
        name: 'checkboxgroup',
        target: {
          value: '1',
          checked: true
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }

      const checkbox = component
        .find(wrapper)
        .dive()
        .dive()
        .find('input[type="checkbox"]')

      expect(onChange).to.not.have.been.called()

      checkbox.simulate('change', event)

      expect(onChange).to.have.been.calledWith({
        name: 'checkboxgroup',
        values: ['1'],
        preventDefault: event.preventDefault,
        stopPropagation: event.stopPropagation
      })
    })
  })
})
