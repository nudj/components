/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const SegmentedControl = require('../../../lib/components/segmented-control')

describe('SegmentedControl', () => {
  it('renders', () => {
    shallow(
      <SegmentedControl name='segmented-control' onChange={() => {}} value='1'>
        {Segment => <Segment value='1' label='One' />}
      </SegmentedControl>
    )
  })
})
