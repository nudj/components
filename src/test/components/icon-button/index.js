/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const IconButton = require('../../../lib/components/icon-button')

describe('IconButton', () => {
  it('renders', () => {
    shallow(<IconButton iconName='email' />)
  })
})
