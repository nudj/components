const React = require('react')
const get = require('lodash/get')
const classnames = require('classnames')

const renderDataRow = (row, columns, renderer, className, Cell) => {
  return columns.map(column => {
    const defaultValue = get(row, column.name, '')
    const cell = renderer ? renderer(column, row, defaultValue) : defaultValue

    return (
      <Cell
        className={classnames(className)}
        key={`cell-${row.id}-${column.name}`}
      >
        {cell}
      </Cell>
    )
  })
}

const renderHeading = (column, renderer) => {
  const defaultValue = get(column, 'heading', '')
  return renderer ? renderer(column, defaultValue) : defaultValue
}

const defaultTable = props => (
  <table className={classnames(props.className)}>{props.children}</table>
)
const defaultBody = props => (
  <tbody className={classnames(props.className)}>{props.children}</tbody>
)
const defaultHead = props => (
  <thead className={classnames(props.className)}>{props.children}</thead>
)
const defaultCell = props => (
  <td className={classnames(props.className)}>{props.children}</td>
)
const defaultHeaderRow = props => (
  <tr className={classnames(props.className)}>{props.children}</tr>
)

const defaultHeading = props => {
  const column = get(props, 'column')
  const renderer = get(props, 'renderer')

  return (
    <th className={classnames(props.className)}>
      {renderHeading(column, renderer)}
    </th>
  )
}
const defaultRow = props => {
  const className = get(props, 'classNames.cell')
  return (
    <tr className={classnames(props.className)}>
      {renderDataRow(
        props.row,
        props.columns,
        props.renderer,
        className,
        props.Cell
      )}
    </tr>
  )
}

const Table = props => {
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
    <MainTable className={classnames(classNames.table)}>
      <TableHead className={classnames(classNames.header)}>
        <HeaderRow className={classnames(classNames.headerRow)}>
          {columns.map(column => (
            <TableHeading
              className={classnames(classNames.heading)}
              renderer={props.headingRenderer}
              key={column.name}
              column={column}
            />
          ))}
        </HeaderRow>
      </TableHead>
      <TableBody className={classnames(classNames.body)}>
        {data.map(row => (
          <Row
            columns={columns}
            row={row}
            classNames={classNames}
            className={classnames(classNames.row)}
            renderer={props.cellRenderer}
            Cell={Cell}
            key={row.id}
          />
        ))}
      </TableBody>
    </MainTable>
  )
}

module.exports = Table
