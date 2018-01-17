/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Modal = require('../../../lib/components/modal')

describe('Modal', () => {
  it('renders', () => {
    shallow(<Modal isOpen />)
  })

  describe('props', () => {
    it('renders its children', () => {
      const component = shallow(<Modal isOpen>foo</Modal>)
      expect(component.contains('foo')).to.be.true()
    })
  })
})
