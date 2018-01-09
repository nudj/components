/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const RadioButton = require('../../../lib/components/radio-button')

describe('RadioButton', () => {
  describe('events', () => {
    it('takes an onChange function', () => {
      const customOnChange = sinon.stub()
      const component = shallow(<RadioButton onChange={customOnChange} />)

      const event = {
        target: {
          name: 'NAME',
          value: 'VALUE',
          checked: false
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }

      const radio = component.find('input[type="radio"]')

      expect(customOnChange).to.not.have.been.called()

      radio.simulate('change', event)

      expect(customOnChange).to.have.been.called()
    })

    it('passes event, name and radio value to onChange function', () => {
      const customOnChange = sinon.stub()
      const checkboxName = 'myRadioButton'
      const component = shallow(
        <RadioButton name={checkboxName} onChange={customOnChange} />
      )

      const event = {
        target: {
          name: 'myRadioButton',
          value: 'RadioButton Value Here',
          checked: false
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }

      const checkbox = component.find('input[type="radio"]')

      checkbox.simulate('change', event)

      expect(customOnChange).to.have.been.calledWith({
        name: checkboxName,
        value: event.target.value,
        checked: event.target.checked,
        preventDefault: event.preventDefault,
        stopPropagation: event.stopPropagation
      })
    })
  })
})
