/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Button = require('../../../lib/components/facebook-button')

describe('FacebookButton', () => {
  it('renders', () => {
    shallow(<Button url='' />)
  })
})
