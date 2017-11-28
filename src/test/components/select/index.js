/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const Select = require('../../../lib/components/select')

describe('Select', () => {
  describe('events', () => {
    it('takes an onChange function', () => {
      const customOnChange = sinon.stub()
      const component = shallow(
        <Select classNames={{ select: 'inputClass' }} onChange={customOnChange}>
          <option value='foo'>Foo</option>
        </Select>
      )
      const input = component.find('.inputClass')
      expect(customOnChange).to.not.have.been.called()
      input.simulate('change', { target: {} })
      expect(customOnChange).to.have.been.called()
    })

    it('passes event, name and input value to onChange function', () => {
      const customOnChange = sinon.stub()
      const inputName = 'myInput'
      const component = shallow(
        <Select
          classNames={{ select: 'inputClass' }}
          name={inputName}
          onChange={customOnChange}
        >
          <option value='foo'>Foo</option>
        </Select>
      )
      const input = component.find('.inputClass')
      const event = {
        target: {
          value: 'Input Value Here'
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }
      input.simulate('change', event)
      expect(customOnChange).to.have.been.calledWith({
        name: inputName,
        value: event.target.value,
        preventDefault: event.preventDefault,
        stopPropagation: event.stopPropagation
      })
    })

    it('takes an onBlur function', () => {
      const customOnBlur = sinon.stub()
      const component = shallow(
        <Select classNames={{ select: 'inputClass' }} onBlur={customOnBlur}>
          <option value='foo'>Foo</option>
        </Select>
      )
      const input = component.find('.inputClass')
      expect(customOnBlur).to.not.have.been.called()
      input.simulate('blur', { target: {} })
      expect(customOnBlur).to.have.been.called()
    })

    it('passes event, name and input value to onBlur function', () => {
      const customOnBlur = sinon.stub()
      const inputName = 'myInput'
      const component = shallow(
        <Select
          classNames={{ select: 'inputClass' }}
          name={inputName}
          onBlur={customOnBlur}
        >
          <option value='foo'>Foo</option>
        </Select>
      )
      const input = component.find('.inputClass')
      const event = {
        target: {
          value: 'Input Value Here'
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }
      input.simulate('blur', event)
      expect(customOnBlur).to.have.been.calledWith({
        name: inputName,
        value: event.target.value,
        preventDefault: event.preventDefault,
        stopPropagation: event.stopPropagation
      })
    })

    it('takes an onFocus function', () => {
      const customOnFocus = sinon.stub()
      const component = shallow(
        <Select classNames={{ select: 'inputClass' }} onFocus={customOnFocus}>
          <option value='foo'>Foo</option>
        </Select>
      )
      const input = component.find('.inputClass')
      expect(customOnFocus).to.not.have.been.called()
      input.simulate('focus', { target: {} })
      expect(customOnFocus).to.have.been.called()
    })

    it('passes event, name and input value to onFocus function', () => {
      const customOnFocus = sinon.stub()
      const inputName = 'myInput'
      const component = shallow(
        <Select
          classNames={{ select: 'inputClass' }}
          name={inputName}
          onFocus={customOnFocus}
        >
          <option value='foo'>Foo</option>
        </Select>
      )
      const input = component.find('.inputClass')
      const event = {
        target: {
          value: 'Input Value Here'
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }
      input.simulate('focus', event)
      expect(customOnFocus).to.have.been.calledWith({
        name: inputName,
        value: event.target.value,
        preventDefault: event.preventDefault,
        stopPropagation: event.stopPropagation
      })
    })
  })
})
