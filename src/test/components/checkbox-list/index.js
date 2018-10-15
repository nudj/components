/* eslint-env mocha */
const React = require('react')
const { shallow } = require('enzyme')

const CheckboxList = require('../../../lib/components/checkbox-list')

describe('CheckboxList', () => {
  it('renders', () => {
    shallow(
      <CheckboxList name='CheckboxList' onChange={() => {}} values={['1']}>
        {ListItem => ListItem({ value: '1', label: 'One' })}
      </CheckboxList>
    )
  })
})
