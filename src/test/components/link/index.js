/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const { Link } = require('../../../lib')

describe('Link', () => {
  it('renders', () => {
    shallow(<Link>foo</Link>)
  })

  describe('props', () => {
    it('renders its children', () => {
      const component = shallow(<Link>foo</Link>)
      expect(component.contains('foo')).to.be.true()
    })
  })
})
