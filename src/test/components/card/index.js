/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Card = require('../../../lib/components/card')

describe('Card', () => {
  it('renders', () => {
    const component = shallow(<Card>foo</Card>)
  })

  describe('props', () => {
    it('takes a class name', () => {
      const component = shallow(<Card className="example">foo</Card>)
      const card = component.find('.example')
      expect(card.exists()).to.be.true()
    })

    it('renders its children', () => {
      const component = shallow(<Card>foo</Card>)
      expect(component.contains('foo')).to.be.true()
    })
  })
})
