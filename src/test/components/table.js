/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const { data } = require('../helpers/mock-data')
const Table = require('../../lib/table')

const columns = [
  {
    title: 'First Name',
    accessor: 'firstName'
  },
  {
    title: 'Last Name',
    accessor: 'lastName'
  },
  {
    title: 'Source',
    accessor: 'source'
  },
  {
    title: 'Company',
    accessor: 'company'
  },
  {
    title: 'Job Title',
    accessor: 'title'
  },
  {
    title: 'Email Address',
    accessor: 'to.email'
  }
]

describe('Table', () => {
  it('takes an array of columns', () => {
    const component = shallow(<Table data={data} columns={columns} />)
    const headers = component.find('th')

    expect(headers).to.have.length(6)
  })

  it('creates rows based on provided data', () => {
    const component = shallow(<Table data={data} columns={columns} />)
    const rows = component.find('tbody').children()

    expect(rows).to.have.length(7)
  })

  it('renders the provided title as the column title', () => {
    const component = shallow(<Table data={data} columns={columns} />)
    const firstHeader = component.find('th').at(0).props()
    const secondHeader = component.find('th').at(1).props()

    expect(firstHeader.children).to.equal('First Name')
    expect(secondHeader.children).to.equal('Last Name')
  })

  it('places the correct values on the row using the column accessor keys', () => {
    const component = shallow(<Table data={data} columns={columns} />)
    const rows = component.find('tbody').children()
    const firstRow = rows.first().children()
    const rowData = firstRow.map(rowItem => rowItem.text())

    expect(rowData).to.deep.equal([
      'John',
      'Smith',
      'LinkedIn',
      'Grand Testing Inc.',
      'Chief Executive Tester',
      'test@email.com'
    ])
  })

  it('can use accessor strings for row data', () => {
    const tableColumn = [
      { title: 'Dot Notation', accessor: 'deeply.nested.value' },
      { title: 'Brackets', accessor: 'bracketed[\'value\']' }
    ]
    const tableData = [{
      id: 1,
      bracketed: { value: 'Bracket Success' },
      deeply: {
        nested: {
          value: 'Dot Notation Success'
        }
      }
    }]
    const component = shallow(<Table data={tableData} columns={tableColumn} />)
    const rows = component.find('tbody').children()
    const firstRow = rows.first().children()

    expect(firstRow.at(0).text()).to.equal('Dot Notation Success')
    expect(firstRow.at(1).text()).to.equal('Bracket Success')
  })

  it('can use an object accessor to concat values under one heading', () => {
    const tableColumn = [
      {
        title: 'Name',
        accessor: {
          keys: ['firstName', 'lastName']
        }
      }
    ]
    const tableData = [{
      id: 1,
      firstName: 'John',
      lastName: 'Smith'
    }]
    const component = shallow(<Table data={tableData} columns={tableColumn} />)
    const rows = component.find('tbody').children()
    const firstRow = rows.first().children()

    expect(firstRow.at(0).text()).to.equal('John Smith')
  })

  it('can be provided with a custom separator for an object accessor', () => {
    const tableColumn = [
      {
        title: 'Name',
        accessor: {
          keys: ['firstName', 'lastName'],
          joinWith: '----'
        }
      }
    ]
    const tableData = [{
      id: 1,
      firstName: 'John',
      lastName: 'Smith'
    }]
    const component = shallow(<Table data={tableData} columns={tableColumn} />)
    const rows = component.find('tbody').children()
    const firstRow = rows.first().children()

    expect(firstRow.at(0).text()).to.equal('John----Smith')
  })

  describe('styles', () => {
    it('can be provided with a className', () => {
      const component = shallow(<Table className='custom_class' data={data} columns={columns} />)
      const props = component.props()
      expect(props.className).to.equal('custom_class')
    })

    it('can be given a general', () => {
      const component = shallow(<Table className='custom_class' data={data} columns={columns} />)
      const props = component.props()
      expect(props.className).to.equal('custom_class')
    })
  })
})
