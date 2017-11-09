const React = require('react')
const get = require('lodash/get')

const Table = (props) => {
  const data = get(props, 'data', [])
  const columns = get(props, 'columns', [])

  return (
    <table>
      <thead>
        <tr>
          {columns.map(header => <th key={header.title}>{header.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(connection => {
          return (
            <tr key={`tr-${connection.id}`}>
              {columns.map(column => <td key={`td-${connection.id}`}>{get(connection, column.accessor, '')}</td>)}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

module.exports = Table
