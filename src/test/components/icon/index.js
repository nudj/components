/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const proxyquire = require('proxyquire')

const ExampleSvg = (props) => (
  <svg viewBox='0 0 24 24' width='1em' height='1em' {...props}>
    <g>
      <path data-color='color-2' d='M8 5V1h8v4' />
    </g>
  </svg>
)

const Icon = proxyquire('../../../lib/components/icon', {
  '../../assets/icons': {
    testExample: ExampleSvg
  }
})

describe('Icon', () => {
  describe('props', () => {
    it('takes a name prop to provide the correct svg', () => {
      const name = 'testExample'
      const component = shallow(<Icon name={name} className='customClass' />)
      expect(component.contains(<ExampleSvg className='customClass' />)).to.equal(true)
    })

    it('takes a class name', () => {
      const name = 'testExample'
      const component = shallow(<Icon name={name} className='iconClass' />)
      expect(component.props().className).to.equal('iconClass')
    })
  })
})
