/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const InputField = require('../../../lib/input-field')

describe('InputField', () => {
  describe('props', () => {
    it('uses label prop as body text', () => {
      const component = shallow(
        <InputField label='Test' componentClasses={{ label: 'labelClass' }} />
      )
      const label = component.find({ className: 'labelClass' })
      expect(label.text()).to.equal('Test')
    })

    it('takes required boolean', () => {
      const component = shallow(
        <InputField
          label='Test'
          componentClasses={{ label: 'labelClass' }}
          required
        />
      )
      const label = component.find({ className: 'labelClass' })
      expect(label.text()).to.equal('Test(required)')
    })

    it('takes for prop as htmlFor on field label', () => {
      const component = shallow(
        <InputField
          label='Test'
          for='TestId'
          componentClasses={{ label: 'labelClass' }}
          required
        />
      )
      const label = component.find({ className: 'labelClass' })
      expect(label.props().htmlFor).to.equal('TestId')
    })
  })

  describe('classes', () => {
    it('takes a label className', () => {
      const component = shallow(
        <InputField componentClasses={{ label: 'labelClass' }} />
      )
      const label = component.find({ className: 'labelClass' })
      expect(label.type()).to.equal('label')
    })

    it('takes a required notice className', () => {
      const component = shallow(
        <InputField
          componentClasses={{ requiredNotice: 'requireClass' }}
          required
        />
      )
      const notice = component.find({ className: 'requireClass' })
      expect(notice.exists()).to.be.true()
      expect(notice.text()).to.equal('(required)')
    })
  })
})
