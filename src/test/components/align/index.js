/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const { Align } = require('../../../lib')

describe('Align', () => {
  it('renders', () => {
    const component = shallow(<Align leftChildren='' rightChildren='' />)
    expect(component).to.exist()
  })

  describe('props', () => {
    it('renders its children', () => {
      const left = <a>Left!</a>
      const right = <button>Right</button>
      const component = shallow(
        <Align leftChildren={left} rightChildren={right} />
      )
      expect(component.find('a')).to.exist()
      expect(component.find('button')).to.exist()
    })
  })
})
