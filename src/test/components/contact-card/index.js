/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const { ContactCard } = require('../../../lib')

describe('ContactCard', () => {
  it('renders', () => {
    const component = shallow(<ContactCard />)
    expect(component).to.exist()
  })
})
