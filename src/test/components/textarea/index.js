/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const Textarea = require('../../../lib/components/textarea')

describe('Textarea', () => {
  it('renders', () => {
    shallow(<Textarea id='' name='textarea' />)
  })

  describe('with autosize prop', () => {
    it('renders', () => {
      shallow(<Textarea id='' name='textarea' autosize />)
    })
  })

  describe('events', () => {
    it('takes an onChange function', () => {
      const customOnChange = sinon.stub()
      const component = shallow(<Textarea onChange={customOnChange} />)

      const event = {
        target: {
          name: 'NAME',
          value: 'VALUE'
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }

      const textarea = component.find('textarea')

      expect(customOnChange).to.not.have.been.called()

      textarea.simulate('change', event)

      expect(customOnChange).to.have.been.called()
    })

    it('passes event, name and textarea value to onChange function', () => {
      const customOnChange = sinon.stub()
      const textareaName = 'myTextarea'
      const component = shallow(
        <Textarea name={textareaName} onChange={customOnChange} />
      )

      const event = {
        target: {
          name: 'myTextarea',
          value: 'Textarea Value Here'
        },
        preventDefault: () => {},
        stopPropagation: () => {}
      }

      const textarea = component.find('textarea')

      textarea.simulate('change', event)

      expect(customOnChange).to.have.been.calledWith({
        name: textareaName,
        value: event.target.value,
        preventDefault: event.preventDefault,
        stopPropagation: event.stopPropagation
      })
    })
  })
})
