/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const IconLink = require('../../../lib/components/icon-link')

describe('IconLink', () => {
  it('renders', () => {
    shallow(<IconLink iconName='email' />)
  })
})
