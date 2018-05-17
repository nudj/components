/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const { CopyString } = require('../../../lib')

describe('CopyString', () => {
  it('renders', () => {
    shallow(<CopyString text='Copy me'>Copy</CopyString>)
  })

  describe('props', () => {
    it('renders its children', () => {
      const component = shallow(<CopyString text='Copy me'>Copy</CopyString>)
      expect(component.contains('Copy')).to.be.true()
    })
  })
})
