/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const proxyquire = require('proxyquire')

const Icon = proxyquire('../../../lib/components/icon', {
  '../../assets/icons': {
    example: 'my-example-svg'
  }
})

describe('Icon', () => {
  describe('props', () => {
    it('takes a name prop to provide the correct svg', () => {
      const name = 'example'
      const component = shallow(<Icon name={name} />)
      expect(component.html()).to.equal(`<span>my-example-svg</span>`)
    })

    it('sets span content as empty string if invalid name is passed', () => {
      const invalidName = 'invalidName'
      const component = shallow(<Icon name={invalidName} />)
      expect(component.html()).to.equal(`<span></span>`)
    })

    it('takes a class name', () => {
      const name = 'my-image'
      const component = shallow(<Icon name={name} className='iconClass' />)
      expect(component.props().className).to.equal('iconClass')
    })
  })
})
