/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Text = require('../../../lib/components/text')

describe('Text', () => {
  describe('props', () => {
    it('takes an `elm` prop to change the element type', () => {
      const component = shallow(<Text elm='p'>foo</Text>)
      expect(component.type()).to.equal('p')
    })

    it('takes a class name', () => {
      const component = shallow(<Text className='example'>foo</Text>)
      const text = component.find('.example')
      expect(text.exists()).to.be.true()
    })

    it('renders its children', () => {
      const component = shallow(<Text>foo</Text>)
      expect(component.contains('foo')).to.be.true()
    })
  })
})
