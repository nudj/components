/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const IntegerInput = require('../../../lib/components/integer-input')

describe('IntegerInput', () => {
  it('renders', () => {
    shallow(<IntegerInput />)
  })
})
