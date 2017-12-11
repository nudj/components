/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Card = require('../../../lib/components/card')

describe('Card', () => {
  it('renders', () => {
    shallow(<Card>foo</Card>)
  })

  describe('props', () => {
    it('renders its children', () => {
      const component = shallow(<Card>foo</Card>)
      expect(component.contains('foo')).to.be.true()
    })
  })
})
