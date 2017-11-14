/* global expect */
/* eslint-env mocha */

const React = require('react')
const { shallow } = require('enzyme')
const sinon = require('sinon')

const Table = require('../../../lib/table')

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
    it('creates headers based on provided data', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const headers = component.find('defaultHeaderCell')

      expect(headers).to.have.length(3)
    })

    it('creates rows based on provided data', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const rows = component.find('defaultBody').children()

      expect(rows).to.have.length(4)
    })

    it('renders the provided title as the column title', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const header = index =>
        component
          .find('defaultHeaderCell')
          .at(index)
          .dive()
          .props()

      expect(header(0).children).to.equal('Title One')
      expect(header(1).children).to.equal('Example')
      expect(header(2).children).to.equal('Important Thing')
    })

    it('places the correct values on the row using the column accessor keys', () => {
      const component = shallow(<Table data={data} columns={columns} />)
      const rows = component.find('defaultBody').children()
      const firstRow = rows.first()
      const rowData = firstRow
        .dive()
        .children()
        .map(rowItem => rowItem.children().text())

      expect(rowData).to.deep.equal([
        'valueOneA',
        'valueTwoA',
        'nestedValueThreeA'
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
      const rows = component.find('defaultBody').children()
      const firstRow = rows.first()
      const rowData = index =>
        firstRow
          .dive()
          .children()
          .at(index)
          .children()

      expect(rowData(0).text()).to.equal('Dot Notation Success')
      expect(rowData(1).text()).to.equal('Bracket Success')
    })
  })

  describe('component overrides', () => {
    it('has a main table component that can be overridden', () => {
      const customTable = props => <table>{props.children}</table>
      const component = shallow(<Table data={data} columns={columns} />)
      const customComponent = shallow(
        <Table table={customTable} data={data} columns={columns} />
      )
      expect(component.name()).to.equal('defaultTable')
      expect(customComponent.name()).to.equal('customTable')
    })

    it('has a table body that can be overridden', () => {
      const customBody = props => <tbody>{props.children}</tbody>
      const component = shallow(<Table data={data} columns={columns} />)
      const customComponent = shallow(
        <Table tableBody={customBody} data={data} columns={columns} />
      )
      expect(
        component
          .children()
          .last()
          .name()
      ).to.equal('defaultBody')
      expect(
        customComponent
          .children()
          .last()
          .name()
      ).to.equal('customBody')
    })

    it('has a table cell component that can be overridden', () => {
      const customCell = props => <td>{props.children}</td>
      const component = shallow(<Table data={data} columns={columns} />)
      const customComponent = shallow(
        <Table tableCell={customCell} data={data} columns={columns} />
      )
      expect(
        component
          .find('defaultBody')
          .children()
          .first()
          .dive()
          .children()
          .first()
          .name()
      ).to.equal('defaultCell')
      expect(
        customComponent
          .find('defaultBody')
          .children()
          .first()
          .dive()
          .children()
          .first()
          .name()
      ).to.equal('customCell')
    })

    it('has a row cell component that can be overridden', () => {
      const customRow = props => <tr>{props.children}</tr>
      const component = shallow(<Table data={data} columns={columns} />)
      const customComponent = shallow(
        <Table tableRow={customRow} data={data} columns={columns} />
      )
      expect(
        component
          .find('defaultBody')
          .children()
          .first()
          .name()
      ).to.equal('defaultRow')
      expect(
        customComponent
          .find('defaultBody')
          .children()
          .first()
          .name()
      ).to.equal('customRow')
    })

    it('has a table head component that can be overridden', () => {
      const customHead = props => <thead>{props.children}</thead>
      const component = shallow(<Table data={data} columns={columns} />)
      const customComponent = shallow(
        <Table tableHead={customHead} data={data} columns={columns} />
      )
      expect(
        component
          .find('defaultTable')
          .children()
          .first()
          .name()
      ).to.equal('defaultHead')
      expect(
        customComponent
          .find('defaultTable')
          .children()
          .first()
          .name()
      ).to.equal('customHead')
    })

    it('has a header row component that can be overridden', () => {
      const customHeaderRow = props => <tr>{props.children}</tr>
      const component = shallow(<Table data={data} columns={columns} />)
      const customComponent = shallow(
        <Table headerRow={customHeaderRow} data={data} columns={columns} />
      )
      expect(
        component
          .find('defaultHead')
          .children()
          .first()
          .name()
      ).to.equal('defaultHeaderRow')
      expect(
        customComponent
          .find('defaultHead')
          .children()
          .first()
          .name()
      ).to.equal('customHeaderRow')
    })

    it('has a heading component that can be overridden', () => {
      const customHeaderRow = props => <tr>{props.children}</tr>
      const component = shallow(<Table data={data} columns={columns} />)
      const customComponent = shallow(
        <Table headerRow={customHeaderRow} data={data} columns={columns} />
      )
      expect(
        component
          .find('defaultHead')
          .children()
          .first()
          .name()
      ).to.equal('defaultHeaderRow')
      expect(
        customComponent
          .find('defaultHead')
          .children()
          .first()
          .name()
      ).to.equal('customHeaderRow')
    })
  })

  describe('custom renderers', () => {
    it('can be given a function for rendering cells', () => {
      const basicData = [{ id: 1, keyOne: 'valueOneA', keyTwo: 'valueTwoA' }]
      const basicColumns = [
        { heading: 'One', name: 'one' },
        { heading: 'Two', name: 'two' }
      ]
      const renderFunction = (column, row) =>
        `${column.heading} - ${row.keyTwo}`
      const component = shallow(
        <Table
          cellRenderer={renderFunction}
          data={basicData}
          columns={basicColumns}
        />
      )

      const rows = component.find('defaultBody')
      const firstRow = rows.first().children()
      const rowData = firstRow
        .dive()
        .children()
        .map(rowItem => rowItem.children().text())

      expect(rowData).to.deep.equal(['One - valueTwoA', 'Two - valueTwoA'])
    })

    it('custom cellRenderer function is provided with all row and column data', () => {
      const basicData = [{ id: 1, keyOne: 'valueOneA', keyTwo: 'valueTwoA' }]
      const basicColumns = [{ heading: 'One', name: 'keyOne' }]
      const renderFunction = sinon.stub()
      const component = shallow(
        <Table
          cellRenderer={renderFunction}
          data={basicData}
          columns={basicColumns}
        />
      )
      component
        .find('defaultBody')
        .children()
        .first()
        .dive() // Using dive to simulate the component being rendered.

      expect(renderFunction).to.have.been.calledWith(
        basicColumns[0],
        basicData[0],
        'valueOneA'
      )
    })

    it('can be given a custom renderer for headings', () => {
      const basicData = [{ id: 1, keyOne: 'valueOneA', keyTwo: 'valueTwoA' }]
      const basicColumns = [{ heading: 'One', name: 'one' }]
      const customHeadingRenderer = header => {}
      const component = shallow(
        <Table
          headingRenderer={customHeadingRenderer}
          data={basicData}
          columns={basicColumns}
        />
      )

      expect(component.find('defaultHeaderCell').props().renderer).to.equal(
        customHeadingRenderer
      )
    })

    it('custom headingRenderer is provided with the heading data and default rendered state', () => {
      const basicData = [{ id: 1, keyOne: 'valueOneA', keyTwo: 'valueTwoA' }]
      const basicColumns = [{ heading: 'One', name: 'one' }]
      const customHeadingRenderer = sinon.stub()
      const component = shallow(
        <Table
          headingRenderer={customHeadingRenderer}
          data={basicData}
          columns={basicColumns}
        />
      )
      component.find('defaultHeaderCell').dive() // Simulates the component being rendered.

      expect(customHeadingRenderer).to.have.been.calledWith(
        basicColumns[0],
        basicColumns[0].heading
      )
    })
  })

  describe('styles', () => {
    it('can be provided with a className', () => {
      const component = shallow(
        <Table
          classNames={{ table: 'custom_class' }}
          data={data}
          columns={columns}
        />
      )
      const props = component.props()
      expect(props.className).to.equal('custom_class')
    })

    it('can be given a general cell class', () => {
      const component = shallow(
        <Table
          classNames={{ cell: 'custom_cell_class' }}
          data={data}
          columns={columns}
        />
      )
      const cell = component
        .find('defaultBody')
        .children()
        .first()
        .dive()
        .children()
        .first()
      expect(cell.props().className).to.equal('custom_cell_class')
    })

    it('can be given a general row class', () => {
      const component = shallow(
        <Table
          classNames={{ row: 'custom_row_class' }}
          data={data}
          columns={columns}
        />
      )
      const rows = component.find('defaultBody').children()
      const props = rows.first().props()
      expect(props.className).to.equal('custom_row_class')
    })

    it('can be given a general header class', () => {
      const component = shallow(
        <Table
          classNames={{ header: 'custom_header_class' }}
          data={data}
          columns={columns}
        />
      )
      const props = component.find('defaultHead').props()
      expect(props.className).to.equal('custom_header_class')
    })

    it('can be given a general header-row class', () => {
      const component = shallow(
        <Table
          classNames={{ headerRow: 'custom_header_row_class' }}
          data={data}
          columns={columns}
        />
      )
      const props = component
        .find('defaultHead')
        .children()
        .props()
      expect(props.className).to.equal('custom_header_row_class')
    })

    it('can be given a general heading/title class', () => {
      const component = shallow(
        <Table
          classNames={{ heading: 'custom_headings_class' }}
          data={data}
          columns={columns}
        />
      )
      const props = component
        .find('defaultHeaderCell')
        .at(0)
        .dive()
        .props()
      expect(props.className).to.equal('custom_headings_class')
    })

    it('can be given a general body class', () => {
      const component = shallow(
        <Table
          classNames={{ body: 'custom_body_class' }}
          data={data}
          columns={columns}
        />
      )
      const props = component
        .find('defaultBody')
        .first()
        .props()
      expect(props.className).to.equal('custom_body_class')
    })
  })
})
