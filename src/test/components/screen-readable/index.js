/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const ScreenReadable = require('../../../lib/components/screen-readable')

describe('ScreenReadable', () => {
  it('renders', () => {
    shallow(<ScreenReadable>Hello</ScreenReadable>)
  })
})
