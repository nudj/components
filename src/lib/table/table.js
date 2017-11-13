const React = require('react')
const get = require('lodash/get')

const renderDataRow = (row, columns, renderer, className, Cell) => {
  return columns.map(column => {
    let cell = get(row, column.name, '')
    if (renderer) {
      cell = renderer(column, row)
    }

    return <Cell className={className} key={`cell-${row.id}-${column.name}`}>{cell}</Cell>
  })
}

const renderHeading = (header, renderer) => {
  if (renderer) {
    return renderer(header)
  }
  return get(header, 'label', '')
}

const defaultTable = (props) => <table className={props.className}>{props.children}</table>
const defaultBody = (props) => <tbody className={props.className}>{props.children}</tbody>
const defaultHead = (props) => <thead className={props.className}>{props.children}</thead>
const defaultCell = (props) => <td className={props.className}>{props.children}</td>
const defaultHeaderRow = (props) => <tr className={props.className}>{props.children}</tr>

const defaultHeading = (props) => {
  const header = get(props, 'header')
  const renderer = get(props, 'renderer')

  return <th className={props.className}>{renderHeading(header, renderer)}</th>
}
const defaultRow = (props) => {
  const className = get(props, 'classNames.cell')
  return <tr className={props.className}>{renderDataRow(props.row, props.columns, props.renderer, className, props.Cell)}</tr>
}

const Table = (props) => {
  const MainTable = get(props, 'table', defaultTable)
  const TableBody = get(props, 'tableBody', defaultBody)
  const TableHead = get(props, 'tableHead', defaultHead)
  const TableHeading = get(props, 'tableHeading', defaultHeading)
  const Row = get(props, 'tableRow', defaultRow)
  const HeaderRow = get(props, 'headerRow', defaultHeaderRow)
  const Cell = get(props, 'tableCell', defaultCell)
  const data = get(props, 'data', [])
  const columns = get(props, 'columns', [])
  const classNames = get(props, 'classNames', {})

  return (
    <MainTable className={classNames.table}>
      <TableHead className={classNames.header}>
        <HeaderRow className={classNames.headerRow}>
          {columns.map(header => <TableHeading className={classNames.heading} renderer={props.headingRenderer} key={header.name} header={header} />)}
        </HeaderRow>
      </TableHead>
      <TableBody className={classNames.body}>
        {data.map(row => <Row columns={columns} row={row} classNames={classNames} className={classNames.row} renderer={props.cellRenderer} Cell={Cell} key={row.id} />)}
      </TableBody>
    </MainTable>
  )
}

module.exports = Table
