/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const { Pill, PillGroup } = require('../../../lib')

describe('PillGroup', () => {
  it('renders', () => {
    const component = shallow(<PillGroup values={['One']} />)
    expect(component).to.exist()
  })

  describe('props', () => {
    it('renders its values as pills', () => {
      const values = ['one', 'two']
      const component = shallow(<PillGroup values={values} />)
      const pills = component.find(Pill)

      expect(pills.length).to.equal(values.length)
    })
  })
})
