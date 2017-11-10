/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const Table = require('../../../lib/table')

const columns = [
  {
    title: 'Title One',
    label: 'keyOne'
  },
  {
    title: 'Example',
    label: 'keyTwo'
  },
  {
    title: 'Important Thing',
    label: 'keyThree.nestedKey'
  }
]

const data = [
  {
    id: 1,
    keyOne: 'valueOneA',
    keyTwo: 'valueTwoA',
    keyThree: {
      nestedKey: 'nestedValueThreeA'
    }
  },
  {
    id: 2,
    keyOne: 'valueOneB',
    keyTwo: 'valueTwoB',
    keyThree: {
      nestedKey: 'nestedValueThreeB'
    }
  },
  {
    id: 3,
    keyOne: 'valueOneC',
    keyTwo: 'valueTwoC',
    keyThree: {
      nestedKey: 'nestedValueThreeC'
    }
  },
  {
    id: 4,
    keyOne: 'valueOneD',
    keyTwo: 'valueTwoD',
    keyThree: {
      nestedKey: 'nestedValueThreeD'
    }
  }
]

describe('Table', () => {
  describe('data', () => {
    it('creates headers based on provided data', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const headers = component.find('th')

      expect(headers).to.have.length(4) // Including extra column for checkbox
    })

    it('creates rows based on provided data', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const rows = component.find('tbody').children()

      expect(rows).to.have.length(4)
    })

    it('renders the provided title as the column title', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const header = (index) => component.find('th').at(index).props()

      expect(header(0)).to.exist() // Checkbox header
      expect(header(1).children).to.equal('Title One')
      expect(header(2).children).to.equal('Example')
      expect(header(3).children).to.equal('Important Thing')
    })

    it('places the correct values on the row using the column accessor keys', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const rows = component.find('tbody').children()
      const firstRow = rows.first().children()
      const rowData = firstRow.map(rowItem => rowItem.text() || rowItem.html())

      expect(rowData).to.deep.equal([
        '<td><input type="checkbox"/></td>',
        'valueOneA',
        'valueTwoA',
        'nestedValueThreeA'
      ])
    })

    it('can use paths as labels for row data', () => {
      const tableColumn = [
        { title: 'Dot Notation', label: 'deeply.nested.value' },
        { title: 'Brackets', label: 'bracketed[\'value\']' }
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
      const rowData = (index) => rows.first().children().at(index)

      expect(rowData(1).text()).to.equal('Dot Notation Success')
      expect(rowData(2).text()).to.equal('Bracket Success')
    })

    it('has a checkbox for each row', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const checkbox = component.find('td').first().children()
      const row = (index) => component.find('tbody').children().at(index).children().first().children().props()

      expect(checkbox.type()).to.equal('input')
      expect(row(0).type).to.equal('checkbox')
      expect(row(1).type).to.equal('checkbox')
      expect(row(2).type).to.equal('checkbox')
      expect(row(3).type).to.equal('checkbox')
    })
  })

  describe('callbacks', () => {
    it('can be given a function for checkbox change', () => {
      const testFunction = () => {}
      const component = shallow(<Table onCheckboxChange={testFunction} data={data} columns={columns} />)
      const checkbox = component.find('td').first().children()

      expect(checkbox.props().onChange).to.equal(testFunction)
    })

    it('given onCheckboxChange function gets executed on click', () => {
      const testFunction = sinon.stub()
      const component = shallow(<Table onCheckboxChange={testFunction} data={data} columns={columns} />)
      const checkbox = component.find('td').first().children()
      checkbox.simulate('change')

      expect(testFunction).to.have.been.called()
    })

    it('can be given a function for rendering cells', () => {
      const basicData = [{ keyOne: 'valueOneA', keyTwo: 'valueTwoA' }]
      const basicColumns = [{ title: 'One' }, { title: 'Two' }]
      const renderFunction = (column, row) => `${column.title} - ${row.keyTwo}`
      const component = shallow(<Table renderer={renderFunction} data={basicData} columns={basicColumns} />)

      const rows = component.find('tbody').children()
      const firstRow = rows.first().children()
      const rowData = firstRow.map(rowItem => rowItem.text() || rowItem.html())

      expect(rowData).to.deep.equal([
        '<td><input type="checkbox"/></td>',
        'One - valueTwoA',
        'Two - valueTwoA'
      ])
    })

    it('custom cellRenderer function is provided with all row and column data', () => {
      const basicData = [{ keyOne: 'valueOneA', keyTwo: 'valueTwoA' }]
      const basicColumns = [{ title: 'One' }]
      const renderFunction = sinon.stub()
      shallow(<Table renderer={renderFunction} data={basicData} columns={basicColumns} />)

      expect(renderFunction).to.have.been.calledWith({ title: 'One' }, { keyOne: 'valueOneA', keyTwo: 'valueTwoA' })
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
      const firstCell = rows.first().children().at(1)
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
      const props = component.find('th').at(1).props()
      expect(props.className).to.equal('custom_headings_class')
    })

    it('can be given a general body class', () => {
      const component = shallow(<Table bodyClassName='custom_body_class' data={data} columns={columns} />)
      const props = component.find('tbody').first().props()
      expect(props.className).to.equal('custom_body_class')
    })

    it('can be given a checkbox class', () => {
      const component = shallow(<Table checkboxClassName='custom_checkbox_class' data={data} columns={columns} />)
      const props = component.find('td').first().children().props()
      expect(props.className).to.equal('custom_checkbox_class')
    })

    it('can be given a checkbox container class', () => {
      const component = shallow(<Table checkboxClassName='custom_checkbox_cell_class' data={data} columns={columns} />)
      const props = component.find('input').first().props()
      expect(props.className).to.equal('custom_checkbox_cell_class')
    })
  })
})
