/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Button = require('../../../lib/components/messenger-button')

describe('MessengerButton', () => {
  it('renders', () => {
    shallow(<Button link='' appId='' redirectUri='' />)
  })
})
