/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Button = require('../../../lib/components/twitter-button')

describe('TwitterButton', () => {
  it('renders', () => {
    shallow(<Button url='' />)
  })
})
