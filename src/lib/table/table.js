const React = require('react')
const get = require('lodash/get')

const Table = (props) => {
  const data = get(props, 'data', [])
  const columns = get(props, 'columns', [])
  const cellRenderer = get(props, 'renderer')
  const className = get(props, 'className')
  const rowsClassName = get(props, 'rowsClassName')
  const headerClassName = get(props, 'headerClassName')
  const headerRowClassName = get(props, 'headerRowClassName')
  const titleClassName = get(props, 'titleClassName')
  const bodyClassName = get(props, 'bodyClassName')
  const cellsClassName = get(props, 'cellsClassName')
  const checkboxClassName = get(props, 'checkboxClassName')
  const checkboxCellClassName = get(props, 'checkboxCellClassName')

  const renderDataRow = (row) => {
    return columns.map(column => {
      let cell = get(row, column.label)
      if (cellRenderer) {
        cell = cellRenderer(column, row)
      }

      return <td className={column.cellsClassName || cellsClassName} key={`td-${row.id}`}>{cell}</td>
    })
  }

  return (
    <table className={className}>
      <thead className={headerClassName}>
        <tr className={headerRowClassName}>
          <th />
          {columns.map(header => <th className={header.titleClassName || titleClassName} key={header.title}>{header.title}</th>)}
        </tr>
      </thead>
      <tbody className={bodyClassName}>
        {
          data.map(row => {
            return (
              <tr className={rowsClassName} key={`tr-${row.id}`}>
                <td className={checkboxCellClassName}>
                  <input className={checkboxClassName} type='checkbox' onChange={props.onCheckboxChange} />
                </td>
                {renderDataRow(row)}
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

module.exports = Table
