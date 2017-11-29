/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const InputField = require('../../../lib/components/input-field')

describe('InputField', () => {
  describe('props', () => {
    it('uses label prop as body text', () => {
      const component = shallow(
        <InputField label='Test' classNames={{ label: 'labelClass' }} />
      )
      const label = component.find('label')
      expect(label.text()).to.equal('Test')
    })

    it('takes required boolean', () => {
      const component = shallow(<InputField label='Test' required />)
      const label = component.find('label')
      expect(label.text()).to.equal('Test*')
    })

    it('takes htmlFor prop as htmlFor on field label', () => {
      const component = shallow(
        <InputField label='Test' htmlFor='TestId' required />
      )
      const label = component.find('label')
      expect(label.props().htmlFor).to.equal('TestId')
    })
  })
})
