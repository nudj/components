/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const ButtonContainer = require('../../../lib/components/button-container')

describe('ButtonContainer', () => {
  it('renders', () => {
    shallow(<ButtonContainer>foo</ButtonContainer>)
  })

  describe('props', () => {
    it('renders its children', () => {
      const component = shallow(<ButtonContainer>foo</ButtonContainer>)
      expect(component.contains('foo')).to.be.true()
    })
  })
})
