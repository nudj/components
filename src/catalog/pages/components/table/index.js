// @flow
import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'
import Table from '../../../../lib/components/table'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

const columns = [
  { heading: 'Name', name: 'name' },
  { heading: 'Company', name: 'company' }
]

const data = [
  { id: 1, name: 'Tim Robinson', company: 'nudj' },
  { id: 2, name: 'Richard Palmer', company: 'nudj' }
]

const TableDocumentation = () => (
  <Page>
    <p>
      You should use a table when you need to present large amounts of raw data
      in a easy to read manner.
    </p>
    <p>
      The table retrieves key values from the data based on the value of the
      heading key of the appropriate column.
    </p>

    <ReactCodeSpecimen
      code={dedent`
        const columns = [
          { heading: 'Name', name: 'name' },
          { heading: 'Company', name: 'company' }
        ]

        const data = [
          { name: 'Tim Robinson', company: 'nudj' },
          { name: 'Richard Palmer', company: 'nudj' }
        ]

        <Table data={data} columns={columns} />
      `}
    >
      <Table columns={columns} data={data} />
    </ReactCodeSpecimen>
  </Page>
)

export default TableDocumentation
