const React = require('react')
const get = require('lodash/get')

const renderDataRow = (row, columns, renderer, className, Cell) => {
  return columns.map(column => {
    let cell = get(row, column.name, '')
    if (renderer) {
      cell = renderer(column, row)
    }

    return <Cell className={className} key={`cell-${row.id}`}>{cell}</Cell>
  })
}

const defaultTable = (props) => <table className={props.className}>{props.children}</table>
const defaultBody = (props) => <tbody className={props.className}>{props.children}</tbody>
const defaultCell = (props) => <td className={props.className}>{props.children}</td>
const defaultRow = (props) => {
  const className = get(props, 'classNames.cell')

  return <tr className={props.className}>{renderDataRow(props.row, props.columns, props.renderer, className, props.Cell)}</tr>
}

const Table = (props) => {
  const MainTable = get(props, 'table', defaultTable)
  const TableBody = get(props, 'tableBody', defaultBody)
  const Row = get(props, 'tableRow', defaultRow)
  const Cell = get(props, 'tableCell', defaultCell)

  const data = get(props, 'data', [])
  const columns = get(props, 'columns', [])
  const onClickHeader = get(props, 'onClickHeader', () => {})
  const classNames = get(props, 'classNames', {})

  return (
    <MainTable className={classNames.table}>
      <thead className={classNames.header}>
        <tr className={classNames.headerRow}>
          <th />
          {columns.map(header => <th onClick={onClickHeader(header)} className={classNames.heading} key={header.name}>{header.label}</th>)}
        </tr>
      </thead>
      <TableBody className={classNames.body}>
        {
          data.map(row => <Row {...props} row={row} className={classNames.row} Cell={Cell} />)
        }
      </TableBody>
    </MainTable>
  )
}

module.exports = Table
