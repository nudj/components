/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const Input = require('../../../lib/components/input')

describe('Input', () => {
  describe('props', () => {
    it('takes required boolean', () => {
      const component = shallow(
        <Input classNames={{ root: 'inputClass' }} required />
      )
      const input = component.find({ className: 'inputClass' })
      expect(input.props().required).to.be.true()
    })

    it('defaults required boolean to false', () => {
      const component = shallow(
        <Input classNames={{ root: 'inputClass' }} required={false} />
      )
      const input = component.find({ className: 'inputClass' })
      expect(input.props().required).to.be.false()
    })

    it('takes name prop', () => {
      const component = shallow(
        <Input classNames={{ root: 'inputClass' }} name='myInput' />
      )
      const input = component.find({ className: 'inputClass' })
      expect(input.props().name).to.equal('myInput')
    })

    it('default to input as type', () => {
      const component = shallow(
        <Input classNames={{ root: 'inputClass' }} />
      )
      const defaultInput = component.find({ className: 'inputClass' })
      expect(defaultInput.name()).to.equal('input')
    })

    it('takes textarea as type', () => {
      const component = shallow(
        <Input classNames={{ root: 'inputClass' }} type='textarea' />
      )
      const input = component.find({ className: 'inputClass' })
      expect(input.name()).to.equal('textarea')
    })

    it('takes a Wrapper component for optional custom wrapper', () => {
      const wrappingComponent = props => <span {...props} />
      const component = shallow(
        <Input
          classNames={{ wrapper: 'customWrapperClass' }}
          Wrapper={wrappingComponent}
        />
      )
      const wrapper = component.find({ className: 'customWrapperClass' })
      expect(wrapper.type()).to.equal(wrappingComponent)
    })

    it('takes an ErrorWrapper component for optional custom wrapper', () => {
      const CustomErrorWrapper = props => <span {...props} />
      const component = shallow(
        <Input
          classNames={{ error: 'customErrorClass' }}
          ErrorWrapper={CustomErrorWrapper}
        />
      )
      const wrapper = component.find({ className: 'customErrorClass' })
      expect(wrapper.type()).to.equal(CustomErrorWrapper)
    })
  })

  describe('events', () => {
    it('takes an onChange function', () => {
      const customOnChange = sinon.stub()
      const component = shallow(
        <Input classNames={{ root: 'inputClass' }} onChange={customOnChange} />
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
        <Input
          classNames={{ root: 'inputClass' }}
          name={inputName}
          onChange={customOnChange}
        />
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

    it('takes an onBlur function', () => {
      const customOnBlur = sinon.stub()
      const component = shallow(
        <Input classNames={{ root: 'inputClass' }} onBlur={customOnBlur} />
      )
      const input = component.find({ className: 'inputClass' })
      expect(customOnBlur).to.not.have.been.called()
      input.simulate('blur', { target: {} })
      expect(customOnBlur).to.have.been.called()
    })

    it('passes event, name and input value to onBlur function', () => {
      const customOnBlur = sinon.stub()
      const inputName = 'myInput'
      const component = shallow(
        <Input
          classNames={{ root: 'inputClass' }}
          name={inputName}
          onBlur={customOnBlur}
        />
      )
      const input = component.find({ className: 'inputClass' })
      const event = {
        target: {
          value: 'Input Value Here'
        }
      }
      input.simulate('blur', event)
      expect(customOnBlur).to.have.been.calledWith(
        event,
        inputName,
        event.target.value
      )
    })

    it('takes an onFocus function', () => {
      const customOnFocus = sinon.stub()
      const component = shallow(
        <Input classNames={{ root: 'inputClass' }} onFocus={customOnFocus} />
      )
      const input = component.find({ className: 'inputClass' })
      expect(customOnFocus).to.not.have.been.called()
      input.simulate('focus', { target: {} })
      expect(customOnFocus).to.have.been.called()
    })

    it('passes event, name and input value to onFocus function', () => {
      const customOnFocus = sinon.stub()
      const inputName = 'myInput'
      const component = shallow(
        <Input
          classNames={{ root: 'inputClass' }}
          name={inputName}
          onFocus={customOnFocus}
        />
      )
      const input = component.find({ className: 'inputClass' })
      const event = {
        target: {
          value: 'Input Value Here'
        }
      }
      input.simulate('focus', event)
      expect(customOnFocus).to.have.been.calledWith(
        event,
        inputName,
        event.target.value
      )
    })
  })

  describe('classes', () => {
    it('takes an input className', () => {
      const component = shallow(<Input classNames={{ root: 'inputClass' }} />)
      const input = component.find({ className: 'inputClass' })
      expect(input.name()).to.equal('input')
      expect(input.exists()).to.be.true()
    })

    it('takes an outer wrapper className', () => {
      const component = shallow(
        <Input classNames={{ root: 'inputClass', wrapper: 'wrapper' }} />
      )
      const wrapper = component.find({ className: 'wrapper' }).type()
      expect(wrapper().type).to.equal('div')
    })

    it('takes an ErrorWrapper className', () => {
      const component = shallow(
        <Input classNames={{ root: 'inputClass', error: 'customErrorClass' }} />
      )
      const wrapper = component.find({ className: 'customErrorClass' }).type()
      expect(wrapper().type).to.equal('div')
    })
  })
})
