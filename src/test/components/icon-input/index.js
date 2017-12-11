/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const IconInput = require('../../../lib/components/icon-input')

describe('IconInput', () => {
  it('renders', () => {
    shallow(<IconInput />)
  })
})
