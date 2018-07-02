/* eslint-env mocha */
const React = require('react')
const { shallow } = require('enzyme')

const ListMultiSelect = require('../../../lib/components/list-multiselect')

describe('ListMultiSelect', () => {
  it('renders', () => {
    shallow(
      <ListMultiSelect name='ListMultiSelect' onChange={() => {}} values={['1']}>
        {ListItem => ListItem({ value: '1', label: 'One' })}
      </ListMultiSelect>
    )
  })
})
