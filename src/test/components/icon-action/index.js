/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const IconAction = require('../../../lib/components/icon-action')

describe('IconAction', () => {
  it('renders', () => {
    shallow(<IconAction iconName='email' />)
  })
})
