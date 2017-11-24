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
        <Input classNames={{ input: 'inputClass' }} required />
      )
      const input = component.find('.inputClass')
      expect(input.props().required).to.be.true()
    })

    it('takes name prop', () => {
      const component = shallow(
        <Input classNames={{ input: 'inputClass' }} name='myInput' />
      )
      const input = component.find('.inputClass')
      expect(input.props().name).to.equal('myInput')
    })

    it('default to input as type', () => {
      const component = shallow(<Input classNames={{ input: 'inputClass' }} />)
      const defaultInput = component.find('.inputClass')
      expect(defaultInput.type()).to.equal('input')
    })

    it('takes textarea as type', () => {
      const component = shallow(
        <Input classNames={{ input: 'inputClass' }} type='textarea' />
      )
      const input = component.find('.inputClass')
      expect(input.type()).to.equal('textarea')
    })

    it('takes a Wrapper component for optional custom wrapper', () => {
      const wrappingComponent = props => <span {...props} />
      const component = shallow(
        <Input
          classNames={{ root: 'customWrapperClass' }}
          Wrapper={wrappingComponent}
        />
      )
      expect(component.type()).to.equal(wrappingComponent)
    })

    it('takes an ErrorWrapper component for optional custom wrapper', () => {
      const CustomErrorWrapper = props => <span {...props} />
      const component = shallow(
        <Input
          classNames={{ error: 'customErrorClass' }}
          error='Invalid test'
          ErrorWrapper={CustomErrorWrapper}
        />
      )
      const wrapper = component.find('.customErrorClass')
      expect(wrapper.type()).to.equal(CustomErrorWrapper)
      expect(wrapper.children().text()).to.equal('Invalid test')
    })

    it('only renders errorWrapper when an error exists', () => {
      const CustomErrorWrapper = props => <span {...props} />
      const component = shallow(
        <Input
          classNames={{ error: 'customErrorClass' }}
          ErrorWrapper={CustomErrorWrapper}
        />
      )
      const wrapper = component.find('.customErrorClass')
      expect(wrapper.exists()).to.be.false()
    })
  })

  describe('events', () => {
    it('takes an onChange function', () => {
      const customOnChange = sinon.stub()
      const component = shallow(
        <Input classNames={{ input: 'inputClass' }} onChange={customOnChange} />
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
        <Input
          classNames={{ input: 'inputClass' }}
          name={inputName}
          onChange={customOnChange}
        />
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
        <Input classNames={{ input: 'inputClass' }} onBlur={customOnBlur} />
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
        <Input
          classNames={{ input: 'inputClass' }}
          name={inputName}
          onBlur={customOnBlur}
        />
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
        <Input classNames={{ input: 'inputClass' }} onFocus={customOnFocus} />
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
        <Input
          classNames={{ input: 'inputClass' }}
          name={inputName}
          onFocus={customOnFocus}
        />
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

  describe('classes', () => {
    it('takes an input className', () => {
      const component = shallow(<Input classNames={{ input: 'inputClass' }} />)
      const input = component.find('.inputClass')
      expect(input.name()).to.equal('input')
      expect(input.exists()).to.be.true()
    })

    it('takes an outer wrapper className', () => {
      const component = shallow(
        <Input classNames={{ input: 'inputClass', root: 'wrapper' }} />
      )
      const wrapper = component.find('.wrapper').type()
      expect(wrapper().type).to.equal('div')
    })

    it('takes an ErrorWrapper className', () => {
      const component = shallow(
        <Input
          classNames={{ input: 'inputClass', error: 'customErrorClass' }}
          error='Invalid test'
        />
      )
      const wrapper = component.find('.customErrorClass').type()
      expect(wrapper().type).to.equal('div')
    })
  })
})
