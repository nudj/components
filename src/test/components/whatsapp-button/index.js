/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const Button = require('../../../lib/components/whatsapp-button')

describe('WhatsappButton', () => {
  it('renders', () => {
    shallow(<Button />)
  })
})
