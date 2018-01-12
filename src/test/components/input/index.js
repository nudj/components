/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const Input = require('../../../lib/components/input')
const Icon = require('../../../lib/components/icon')
const ButtonContainer = require('../../../lib/components/button-container')

describe('Input', () => {
  describe('props', () => {
    it('default to input as type', () => {
      const component = shallow(<Input />)
      expect(component.find('input')).to.exist()
    })

    it('takes textarea as type', () => {
      const component = shallow(<Input type='textarea' />)
      expect(component.find('textarea')).to.exist()
    })

    it('takes required boolean', () => {
      const component = shallow(<Input required />)
      const input = component.find('input')
      expect(input.props().required).to.be.true()
    })

    it('takes name prop', () => {
      const component = shallow(<Input name='myInput' />)
      const input = component.find('input')
      expect(input.props().name).to.equal('myInput')
    })

    it('takes a Wrapper component for optional custom wrapper', () => {
      const wrappingComponent = props => <span {...props} />
      const component = shallow(<Input Wrapper={wrappingComponent} />)
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
      const wrapper = component.find(CustomErrorWrapper)
      expect(wrapper).to.exist()
      expect(wrapper.children().text()).to.equal('Invalid test')
    })

    it('only renders errorWrapper when an error exists', () => {
      const CustomErrorWrapper = props => <span {...props} />
      const component = shallow(<Input ErrorWrapper={CustomErrorWrapper} />)
      const wrapper = component.find('.customErrorClass')
      expect(wrapper.exists()).to.be.false()
    })

    it('renders an clear button when `clearable` is passed in and the input has a value', () => {
      const clearableComponent = shallow(<Input value='someval' onClear={() => {}} />)
      const notClearableComponent = shallow(<Input onClear={() => {}} />)
      let icon = clearableComponent.find(Icon)
      expect(icon.exists()).to.be.true()

      icon = notClearableComponent.find(Icon)
      expect(icon.exists()).to.be.false()
    })
  })

  describe('events', () => {
    it('takes an onChange function', () => {
      const customOnChange = sinon.stub()
      const inputName = 'myInput'
      const component = shallow(
        <Input name={inputName} onChange={customOnChange} />
      )
      const input = component.find('input')
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
      const inputName = 'myInput'
      const component = shallow(
        <Input name={inputName} onBlur={customOnBlur} />
      )
      const input = component.find('input')
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
      const inputName = 'myInput'
      const component = shallow(
        <Input name={inputName} onFocus={customOnFocus} />
      )
      const input = component.find('input')
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

    it('takes fires the onClear function with an empty string when cleared', () => {
      const onClear = sinon.stub()
      const inputName = 'myInput'
      const component = shallow(
        <Input name={inputName} onClear={onClear} value='foo' clearable />
      )
      const clearButton = component.find(ButtonContainer)

      const event = {
        preventDefault: () => {},
        stopPropagation: () => {}
      }

      clearButton.simulate('click', event)

      expect(onClear).to.have.been.calledWith({
        name: inputName,
        value: '',
        preventDefault: event.preventDefault,
        stopPropagation: event.stopPropagation
      })
    })
  })
})
