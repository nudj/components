const React = require('react')
const get = require('lodash/get')

const Table = (props) => {
  const data = get(props, 'data', [])
  const columns = get(props, 'columns', [])
  const cellRenderer = get(props, 'renderer')
  const classNames = get(props, 'classNames', {})

  const renderDataRow = (row) => {
    return columns.map(column => {
      let cell = get(row, column.label)
      if (cellRenderer) {
        cell = cellRenderer(column, row)
      }

      return <td className={classNames.cell} key={`td-${row.id}`}>{cell}</td>
    })
  }

  return (
    <table className={classNames.table}>
      <thead className={classNames.header}>
        <tr className={classNames.headerRow}>
          <th />
          {columns.map(header => <th className={classNames.heading} key={header.title}>{header.title}</th>)}
        </tr>
      </thead>
      <tbody className={classNames.body}>
        {
          data.map(row => {
            return (
              <tr className={classNames.row} key={`tr-${row.id}`}>
                <td className={classNames.checkboxCell}>
                  <input className={classNames.checkbox} type='checkbox' onChange={props.onCheckboxChange} />
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
