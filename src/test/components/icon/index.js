/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Icon = require('../../../lib/icon')

describe('Icon', () => {
  describe('props', () => {
    it('takes a name prop to form the img src', () => {
      const name = 'my-image'
      const component = shallow(<Icon name={name} />)
      expect(component.props().src).to.equal(`assets/icons/${name}.svg`)
    })

    it('takes a class name', () => {
      const name = 'my-image'
      const component = shallow(<Icon name={name} className='iconClass' />)
      expect(component.props().className).to.equal('iconClass')
    })
  })
})
