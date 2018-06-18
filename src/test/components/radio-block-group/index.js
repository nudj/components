/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const RadioBlockGroup = require('../../../lib/components/radio-block-group')
const RadioBlock = require('../../../lib/components/radio-block')

describe('RadioBlockGroup', () => {
  it('renders', () => {
    shallow(
      <RadioBlockGroup name='RadioBlockGroup' onChange={() => { }} value='1'>
        {Radio => <RadioBlock value='1' label='One' />}
      </RadioBlockGroup>
    )
  })
})
