const React = require('react')
const get = require('lodash/get')

const Table = (props) => {
  const data = get(props, 'data', [])
  const columns = get(props, 'columns', [])
  const className = get(props, 'className')
  const rowsClassName = get(props, 'rowsClassName')
  const headerClassName = get(props, 'headerClassName')
  const headerRowClassName = get(props, 'headerRowClassName')
  const titleClassName = get(props, 'titleClassName')
  const bodyClassName = get(props, 'bodyClassName')
  const cellsClassName = get(props, 'cellsClassName')
  const checkboxClassName = get(props, 'checkboxClassName')
  const checkboxCellClassName = get(props, 'checkboxCellClassName')

  const renderDataRow = (connection) => {
    return columns.map(column => {
      let rowData = get(connection, column.accessor, '')
      if (column.accessor.keys) {
        const splitter = get(column.accessor, 'joinWith', ' ')
        const values = column.accessor.keys.map(key => get(connection, key, ''))
        rowData = values.join(splitter)
      }

      return <td className={column.cellsClassName || cellsClassName} key={`td-${connection.id}`}>{rowData}</td>
    })
  }

  return (
    <table className={className}>
      <thead className={headerClassName}>
        <tr className={headerRowClassName}>
          {columns.map(header => <th className={header.titleClassName || titleClassName} key={header.title}>{header.title}</th>)}
        </tr>
      </thead>
      <tbody className={bodyClassName}>
        {
          data.map(connection => {
            return (
              <tr className={rowsClassName} key={`tr-${connection.id}`}>
                <td className={checkboxCellClassName}>
                  <input className={checkboxClassName} type='checkbox' onChange={props.onCheckboxChange} />
                </td>
                {renderDataRow(connection)}
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

module.exports = Table
