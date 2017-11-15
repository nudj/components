/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const Input = require('../../../lib/input')

describe.only('Input', () => {
  describe('props', () => {
    it('takes required boolean', () => {
      const component = shallow(
        <Input className='inputClass' required />
      )
      const input = component.find({ className: 'inputClass' })
      expect(input.props().required).to.be.true()
    })

    it('defaults required boolean to false', () => {
      const component = shallow(
        <Input className='inputClass' required={false} />
      )
      const input = component.find({ className: 'inputClass' })
      expect(input.props().required).to.be.false()
    })

    it('takes name prop', () => {
      const component = shallow(
        <Input className='inputClass' name='myInput' />
      )
      const input = component.find({ className: 'inputClass' })
      expect(input.props().name).to.equal('myInput')
    })

    it('takes an onChange function', () => {
      const customOnChange = sinon.stub()
      const component = shallow(
        <Input className='inputClass' onChange={customOnChange} />
      )
      const input = component.find({ className: 'inputClass' })
      expect(customOnChange).to.not.have.been.called()
      input.simulate('change', { target: {} })
      expect(customOnChange).to.have.been.called()
    })

    it('passes event, name and input value to onChange function', () => {
      const customOnChange = sinon.stub()
      const inputName = 'myInput'
      const component = shallow(
        <Input className='inputClass' name={inputName} onChange={customOnChange} />
      )
      const input = component.find({ className: 'inputClass' })
      const event = {
        target: {
          value: 'Input Value Here'
        }
      }
      input.simulate('change', event)
      expect(customOnChange).to.have.been.calledWith(
        event,
        inputName,
        event.target.value
      )
    })

    it('takes textarea as type', () => {
      const component = shallow(
        <Input className='inputClass' type='textarea' />
      )
      const input = component.find({ className: 'inputClass' })
      expect(input.name()).to.equal('textarea')
    })
  })

  describe('classes', () => {
    it('takes an input className', () => {
      const component = shallow(<Input className='inputClass' />)
      const input = component.find({ className: 'inputClass' })
      expect(input.name()).to.equal('input')
      expect(input.exists()).to.be.true()
    })

    it('takes an outer wrapper className', () => {
      const component = shallow(<Input className='inputClass' wrapperClass='wrapper' />)
      const wrapper = component.find({ className: 'wrapper' })
      expect(wrapper.name()).to.equal('div')
      expect(wrapper.exists()).to.be.true()
    })
  })
})
