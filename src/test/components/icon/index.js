/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Icon = require('../../../lib/components/icon')

describe('Icon', () => {
  describe('props', () => {
    it('takes a name prop to provide the correct svg', () => {
      const name = 'briefcase'
      const component = shallow(<Icon name={name} className='customClass' />)
      const icon = component.find({ className: 'customClass' })
      expect(icon.name()).to.equal('Briefcase')
    })

    it('takes a class name', () => {
      const name = 'briefcase'
      const component = shallow(<Icon name={name} className='customClass' />)
      const icon = component.find({ className: 'customClass' })
      expect(icon.exists()).to.be.true()
    })
  })
})
