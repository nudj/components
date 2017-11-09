/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const { data } = require('../helpers/mock-data')
const Table = require('../../lib/table')

const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName'
  },
  {
    Header: 'Last Name',
    accessor: 'lastName'
  },
  {
    Header: 'Source',
    accessor: 'source'
  },
  {
    Header: 'Company',
    accessor: 'company'
  },
  {
    Header: 'Job Title',
    accessor: 'title'
  },
  {
    Header: 'Email Address',
    accessor: 'to.email'
  }
]

describe('Table', () => {
  it('takes data as a prop', () => {
    const component = shallow(<Table data={data} columns={columns} />)
    const props = component.props()
    expect(props.data.length).to.deep.equal(6)
  })

  it('takes columns as a prop', () => {
    const component = shallow(<Table data={data} columns={columns} />)
    const props = component.props()
    expect(props.columns.length).to.deep.equal(7)
  })
})
