/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Button = require('../../../lib/components/email-button')

describe('EmailButton', () => {
  it('renders', () => {
    shallow(<Button to='' subject='' body='' />)
  })

  it('renders as gmail', () => {
    shallow(<Button to='' subject='' body='' gmail />)
  })
})
