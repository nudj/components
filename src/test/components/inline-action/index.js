/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const InlineAction = require('../../../lib/components/inline-action')

describe('InlineAction', () => {
  it('renders', () => {
    shallow(<InlineAction>foo</InlineAction>)
  })

  describe('props', () => {
    it('renders its children', () => {
      const component = shallow(<InlineAction>foo</InlineAction>)
      expect(component.contains('foo')).to.be.true()
    })
  })
})
