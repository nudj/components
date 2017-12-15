/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const { Pill } = require('../../../lib')

describe('Pill', () => {
  it('renders', () => {
    const component = shallow(<Pill>foo</Pill>)
    expect(component).to.exist()
  })

  describe('props', () => {
    it('renders its children', () => {
      const Child = () => <span>foo</span>
      const component = shallow(
        <Pill>
          <Child />
        </Pill>
      )
      expect(component.find(Child)).to.exist()
    })
  })
})
