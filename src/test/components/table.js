/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')

const { data } = require('../helpers/mock-data')
const Table = require('../../lib/table')

const columns = [
  {
    title: 'Name',
    accessor: {
      keys: ['firstName', 'lastName']
    }
  },
  {
    title: 'Source',
    accessor: 'source',
    cellsClassName: 'sourceClass'
  },
  {
    title: 'Company',
    accessor: 'company'
  },
  {
    title: 'Job Title',
    titleClassName: 'titleClass',
    accessor: 'title'
  },
  {
    title: 'Email Address',
    accessor: 'to.email'
  }
]

describe('Table', () => {
  describe('data', () => {
    it('takes an array of columns', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const headers = component.find('th')

      expect(headers).to.have.length(5)
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

      expect(firstHeader.children).to.equal('Name')
      expect(secondHeader.children).to.equal('Source')
    })

    it('places the correct values on the row using the column accessor keys', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const rows = component.find('tbody').children()
      const firstRow = rows.first().children()
      const rowData = firstRow.map(rowItem => rowItem.text())

      expect(rowData).to.deep.equal([
        'John Smith',
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
  })

  describe('styles', () => {
    it('can be provided with a className', () => {
      const component = shallow(<Table className='custom_class' data={data} columns={columns} />)
      const props = component.props()
      expect(props.className).to.equal('custom_class')
    })

    it('can be given a general cell class', () => {
      const component = shallow(<Table cellsClassName='custom_cell_class' data={data} columns={columns} />)
      const rows = component.find('tbody').children()
      const firstCell = rows.first().children().first()
      const lastCell = rows.last().children().last()
      expect(firstCell.props().className).to.equal('custom_cell_class')
      expect(lastCell.props().className).to.equal('custom_cell_class')
    })

    it('can be given a general row class', () => {
      const component = shallow(<Table rowsClassName='custom_row_class' data={data} columns={columns} />)
      const rows = component.find('tbody').children()
      const props = rows.first().props()
      expect(props.className).to.equal('custom_row_class')
    })

    it('can be given a general header class', () => {
      const component = shallow(<Table headerClassName='custom_header_class' data={data} columns={columns} />)
      const props = component.find('thead').props()
      expect(props.className).to.equal('custom_header_class')
    })

    it('can be given a general header-row class', () => {
      const component = shallow(<Table headerRowClassName='custom_header_row_class' data={data} columns={columns} />)
      const props = component.find('thead').children().props()
      expect(props.className).to.equal('custom_header_row_class')
    })

    it('can be given a general heading/title class', () => {
      const component = shallow(<Table titleClassName='custom_headings_class' data={data} columns={columns} />)
      const props = component.find('th').first().props()
      expect(props.className).to.equal('custom_headings_class')
    })

    it('can be given a general body class', () => {
      const component = shallow(<Table bodyClassName='custom_body_class' data={data} columns={columns} />)
      const props = component.find('tbody').first().props()
      expect(props.className).to.equal('custom_body_class')
    })

    it('can override class of cells in column', () => {
      const component = shallow(<Table cellsClassName='custom_cell_class' data={data} columns={columns} />)
      const rows = component.find('tbody').first().children().at(0).children()
      const standardClassCell = rows.at(0).props()
      const overriddenClassCell = rows.at(1).props()
      expect(standardClassCell.className).to.equal('custom_cell_class')
      expect(overriddenClassCell.className).to.equal('sourceClass')
    })

    it('can override class of column title', () => {
      const component = shallow(<Table titleClassName='custom_title_class' data={data} columns={columns} />)
      const headers = component.find('th')
      const standardClassTitle = headers.at(0).props()
      const overriddenClassTitle = headers.at(3).props()
      expect(standardClassTitle.className).to.equal('custom_title_class')
      expect(overriddenClassTitle.className).to.equal('titleClass')
    })
  })
})
