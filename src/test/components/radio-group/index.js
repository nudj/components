/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const RadioGroup = require('../../../lib/components/radio-group')

describe('RadioGroup', () => {
  it('renders', () => {
    shallow(
      <RadioGroup name='radiogroup' onChange={() => {}} value='1'>
        {Radio => <Radio value='1' label='One' />}
      </RadioGroup>
    )
  })

  describe('props', () => {
    it('correctly sets the checked values', () => {
      let wrapper
      const component = shallow(
        <RadioGroup name='Radiogroup' onChange={() => {}} value='1'>
          {Radio => {
            wrapper = Radio
            return <Radio value='1' label='One' />
          }}
        </RadioGroup>
      )

      const radio = component.find(wrapper).dive()
      expect(radio.props().checked).to.be.true()
    })

    it('takes an onChange function', () => {
      let wrapper
      const onChange = sinon.stub()
      const component = shallow(
        <RadioGroup name='radiogroup' onChange={onChange} values={[]}>
          {Radio => {
            wrapper = Radio
            return <Radio value='1' label='One' />
          }}
        </RadioGroup>
      )

      const event = {
        name: 'radiogroup',
        target: {
          value: '1',
          checked: true
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }

      const radio = component
        .find(wrapper)
        .dive()
        .dive()
        .find('input[type="radio"]')

      expect(onChange).to.not.have.been.called()

      radio.simulate('change', event)

      expect(onChange).to.have.been.calledWith({
        name: 'radiogroup',
        value: '1',
        preventDefault: event.preventDefault,
        stopPropagation: event.stopPropagation
      })
    })
  })
})
