const React = require('react')
const get = require('lodash/get')
const ReactTableComponent = require('react-table')

const ReactTable = ReactTableComponent.default || ReactTableComponent

const Table = (props) => {
  const data = get(props, 'data', [])
  const providedColumns = get(props, 'columns', [])

  const columns = providedColumns.concat([
    {
      Header: '',
      accessor: 'selectButton',
      Cell: (value) => <button onClick={() => console.log(value)}>{value}</button>
    }
  ])

  return (
    <ReactTable data={data} columns={columns} />
  )
}

module.exports = Table
