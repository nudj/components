/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const Checkbox = require('../../../lib/components/checkbox')

describe('Checkbox', () => {
  describe('props', () => {
    it('takes boolean as checked prop', () => {
      const component = shallow(
        <Checkbox classNames={{ root: 'checkboxClass' }} checked />
      )
      const checkbox = component.find({ className: 'checkboxClass' })
      expect(checkbox.props().checked).to.be.true()
    })

    it('renders tick svg when checked prop is true', () => {
      const component = shallow(
        <Checkbox classNames={{ root: 'checkboxClass' }} checked />
      )
      const tick = component.find('path')
      expect(tick.exists()).to.be.true()
    })

    it('renders no tick svg when checked prop is false', () => {
      const component = shallow(
        <Checkbox classNames={{ root: 'checkboxClass' }} />
      )
      const tick = component.find('path')
      expect(tick.exists()).to.be.false()
    })

    it('takes a Wrapper component for optional custom wrapper', () => {
      const wrappingComponent = props => <span {...props} />
      const component = shallow(
        <Checkbox
          classNames={{ wrapper: 'customWrapperClass' }}
          Wrapper={wrappingComponent}
        />
      )
      const wrapper = component.find({ className: 'customWrapperClass' })
      expect(wrapper.type()).to.equal(wrappingComponent)
    })
  })

  describe('events', () => {
    it('takes an onChange function', () => {
      const customOnChange = sinon.stub()
      const component = shallow(
        <Checkbox
          classNames={{ root: 'checkboxClass' }}
          onChange={customOnChange}
        />
      )
      const checkbox = component.find({ className: 'checkboxClass' })
      const event = {
        target: {
          name: 'NAME',
          value: 'VALUE',
          checked: false
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }
      expect(customOnChange).to.not.have.been.called()
      checkbox.simulate('change', event)
      expect(customOnChange).to.have.been.called()
    })

    it('passes event, name and checkbox value to onChange function', () => {
      const customOnChange = sinon.stub()
      const checkboxName = 'myCheckbox'
      const component = shallow(
        <Checkbox
          classNames={{ root: 'checkboxClass' }}
          name={checkboxName}
          onChange={customOnChange}
        />
      )
      const checkbox = component.find({ className: 'checkboxClass' })
      const event = {
        target: {
          name: 'myCheckbox',
          value: 'Checkbox Value Here',
          checked: false
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }
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

  describe('classes', () => {
    it('takes a custom classNames object for styling', () => {
      const component = shallow(
        <Checkbox
          checked
          classNames={{
            root: 'inputClass',
            wrapper: 'wrapperClass',
            checkbox: 'checkboxClass'
          }}
        />
      )
      const checkbox = component.find({ className: 'checkboxClass' })
      const input = component.find({ className: 'inputClass' })
      const wrapper = component.find({ className: 'wrapperClass' })
      const styledComponents = [checkbox, input, wrapper]
      styledComponents.forEach(element => {
        expect(element.exists()).to.be.true()
      })
    })

    it('takes a checkbox className', () => {
      const component = shallow(
        <Checkbox classNames={{ root: 'checkboxClass' }} checked />
      )
      const checkbox = component.find({ className: 'checkboxClass' })
      expect(checkbox.name()).to.equal('input')
      expect(checkbox.props().type).to.equal('checkbox')
    })

    it('takes an outer wrapper className', () => {
      const component = shallow(
        <Checkbox classNames={{ root: 'checkboxClass', wrapper: 'wrapper' }} />
      )
      const wrapper = component.find({ className: 'wrapper' }).type()
      expect(wrapper().type).to.equal('div')
    })
  })
})
