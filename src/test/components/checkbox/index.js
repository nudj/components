/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const Checkbox = require('../../../lib/components/checkbox')

describe('Checkbox', () => {
  describe('events', () => {
    it('takes an onChange function', () => {
      const customOnChange = sinon.stub()
      const component = shallow(<Checkbox onChange={customOnChange} />)

      const event = {
        target: {
          name: 'NAME',
          value: 'VALUE',
          checked: false
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }

      const checkbox = component.find('input[type="checkbox"]')

      expect(customOnChange).to.not.have.been.called()

      checkbox.simulate('change', event)

      expect(customOnChange).to.have.been.called()
    })

    it('passes event, name and checkbox value to onChange function', () => {
      const customOnChange = sinon.stub()
      const checkboxName = 'myCheckbox'
      const component = shallow(
        <Checkbox name={checkboxName} onChange={customOnChange} />
      )

      const event = {
        target: {
          name: 'myCheckbox',
          value: 'Checkbox Value Here',
          checked: false
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }

      const checkbox = component.find('input[type="checkbox"]')

      checkbox.simulate('change', event)

      expect(customOnChange).to.have.been.calledWith({
        name: checkboxName,
        value: event.target.value,
        checked: event.target.checked,
        preventDefault: event.preventDefault,
        stopPropagation: event.stopPropagation,
        indeterminate: false,
        required: false
      })
    })
  })
})
