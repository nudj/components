/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Button = require('../../../lib/components/button')

describe('Button', () => {
  it('renders', () => {
    shallow(<Button>foo</Button>)
  })

  describe('props', () => {
    it('takes a class name', () => {
      const component = shallow(<Button className='example'>foo</Button>)
      const button = component.find('.example')
      expect(button.exists()).to.be.true()
    })

    it('renders its children', () => {
      const component = shallow(<Button>foo</Button>)
      expect(component.contains('foo')).to.be.true()
    })
  })
})
