/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const Table = require('../../../lib/components/table')

const columns = [
  {
    heading: 'Title One',
    name: 'keyOne'
  },
  {
    heading: 'Example',
    name: 'keyTwo'
  },
  {
    heading: 'Important Thing',
    name: 'keyThree.nestedKey'
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
    it('creates headings based on provided data', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const headers = component.find('th')
      expect(headers).to.have.length(columns.length)
    })

    it('creates rows based on provided data', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const rows = component.find('tbody').find('tr')
      expect(rows).to.have.length(data.length)
    })

    it('renders the provided title as the column title', () => {
      const component = shallow(
        <Table
          classNames={{ heading: 'headingClass' }}
          data={data}
          columns={columns}
        />
      )
      const headers = component.find({ className: 'headingClass' })
      const headerTitles = headers.map(header => header.children().text())
      headerTitles.forEach((title, index) => {
        expect(title).to.equal(columns[index].heading)
      })
    })

    it('places the correct values on the row using the column accessor keys', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const cells = component.find('tbody').find('td')
      const cellValues = cells.map(rowItem => rowItem.children().text())
      expect(cellValues).to.deep.equal([
        'valueOneA',
        'valueTwoA',
        'nestedValueThreeA',
        'valueOneB',
        'valueTwoB',
        'nestedValueThreeB',
        'valueOneC',
        'valueTwoC',
        'nestedValueThreeC',
        'valueOneD',
        'valueTwoD',
        'nestedValueThreeD'
      ])
    })

    it('can use paths as names for row data', () => {
      const tableColumn = [
        { heading: 'Dot Notation', name: 'deeply.nested.value' },
        { heading: 'Brackets', name: "bracketed['value']" }
      ]
      const tableData = [
        {
          id: 1,
          bracketed: { value: 'Bracket Success' },
          deeply: {
            nested: {
              value: 'Dot Notation Success'
            }
          }
        }
      ]
      const component = shallow(
        <Table data={tableData} columns={tableColumn} />
      )
      const row = component
        .find('tbody')
        .find('tr')
        .first()
      const cells = row.children()
      const cellData = cells.map(cell => cell.props().children)
      expect(cellData).to.deep.equal([
        'Dot Notation Success',
        'Bracket Success'
      ])
    })
  })

  describe('component overrides', () => {
    it('has a main table component that can be overridden', () => {
      const customTable = props => <table>{props.children}</table>
      const customComponent = shallow(
        <Table component={customTable} data={data} columns={columns} />
      )
      expect(customComponent.name()).to.equal('customTable')
    })

    it('has a table body that can be overridden', () => {
      const customBody = props => <tbody>{props.children}</tbody>
      const customComponent = shallow(
        <Table Body={customBody} data={data} columns={columns} />
      )
      expect(customComponent.find(customBody)).to.exist()
    })

    it('has a table cell component that can be overridden', () => {
      const customCell = props => <td>{props.children}</td>
      const customComponent = shallow(
        <Table Cell={customCell} data={data} columns={columns} />
      )

      const cell = customComponent
        .find('tbody')
        .find('tr')
        .children()
        .first()

      expect(cell.name()).to.equal('customCell')
    })

    it('has a row cell component that can be overridden', () => {
      const customRow = props => <tr>{props.children}</tr>
      const customComponent = shallow(
        <Table Row={customRow} data={data} columns={columns} />
      )
      expect(customComponent.find('customRow').exists()).to.be.true()
    })

    it('has a table head component that can be overridden', () => {
      const customHead = props => <thead>{props.children}</thead>
      const customComponent = shallow(
        <Table Head={customHead} data={data} columns={columns} />
      )
      expect(customComponent.find('customHead').exists()).to.be.true()
    })

    it('has a header row component that can be overridden', () => {
      const customHeaderRow = props => <tr>{props.children}</tr>
      const customComponent = shallow(
        <Table HeaderRow={customHeaderRow} data={data} columns={columns} />
      )
      expect(customComponent.find('customHeaderRow').exists()).to.be.true()
    })

    it('has a header cell component that can be overridden', () => {
      const customHeaderCell = props => <th>{props.children}</th>
      const customComponent = shallow(
        <Table HeaderCell={customHeaderCell} data={data} columns={columns} />
      )
      expect(customComponent.find('customHeaderCell').exists()).to.be.true()
    })
  })

  describe('custom renderers', () => {
    it('can be given a function for rendering cells', () => {
      const basicData = [{ id: 1, keyOne: 'valueOneA', keyTwo: 'valueTwoA' }]
      const basicColumns = [
        { heading: 'One', name: 'one' },
        { heading: 'Two', name: 'two' }
      ]
      const renderFunction = (column, row) => `${column.heading}-${row.keyTwo}`
      const component = shallow(
        <Table
          cellRenderer={renderFunction}
          data={basicData}
          columns={basicColumns}
        />
      )
      const cells = component.find('tbody').find('td')
      const rowData = cells.map(rowItem => rowItem.children().text())
      expect(rowData).to.deep.equal(['One-valueTwoA', 'Two-valueTwoA'])
    })

    it('custom cellRenderer function is provided with all row and column data', () => {
      const basicData = [{ id: 1, keyOne: 'valueOneA', keyTwo: 'valueTwoA' }]
      const basicColumns = [{ heading: 'One', name: 'keyOne' }]
      const renderFunction = sinon.stub()
      shallow(
        <Table
          cellRenderer={renderFunction}
          data={basicData}
          columns={basicColumns}
        />
      )
      expect(renderFunction).to.have.been.calledWith(
        basicColumns[0],
        basicData[0],
        'valueOneA'
      )
    })

    it('can be given a custom renderer for headings', () => {
      const basicData = [{ id: 1, keyOne: 'valueOneA', keyTwo: 'valueTwoA' }]
      const basicColumns = [{ heading: 'One', name: 'one' }]
      const customHeadingRenderer = () => 'Custom content'
      const component = shallow(
        <Table
          headingRenderer={customHeadingRenderer}
          data={basicData}
          columns={basicColumns}
        />
      )
      const heading = component.find('th')
      const headingValue = heading.props().children
      expect(headingValue).to.equal(customHeadingRenderer())
    })

    it('custom headingRenderer is provided with the heading data and default rendered state', () => {
      const basicData = [{ id: 1, keyOne: 'valueOneA', keyTwo: 'valueTwoA' }]
      const basicColumns = [{ heading: 'One', name: 'one' }]
      const customHeadingRenderer = sinon.stub()
      shallow(
        <Table
          headingRenderer={customHeadingRenderer}
          data={basicData}
          columns={basicColumns}
        />
      )
      expect(customHeadingRenderer).to.have.been.calledWith(
        basicColumns[0],
        basicColumns[0].heading
      )
    })
  })
})
