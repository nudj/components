/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Banner = require('../../../lib/components/banner')

describe('Banner', () => {
  it('renders', () => {
    shallow(<Banner>foo</Banner>)
  })

  describe('props', () => {
    it('renders its children', () => {
      const component = shallow(<Banner>foo</Banner>)
      expect(component.contains('foo')).to.be.true()
    })
  })
})
