// @flow
const React = require('react')
const get = require('lodash/get')
const classnames = require('classnames')

type Column = {
  heading: string,
  name: string
}

type ClassList = {
  table?: string,
  header?: string,
  headerRow?: string,
  heading?: string,
  body?: string,
  row?: string,
  cell?: string
}

type TableProps = {
  Table?: Function,
  Body?: Function,
  Head?: Function,
  HeaderCell?: Function,
  HeaderRow?: Function,
  Row?: Function,
  Cell?: Function,
  data: Array<Object>,
  columns: Array<Column>,
  classNames?: ClassList,
  headingRenderer?: Function,
  cellRenderer?: Function
}

const TableWrapper = (props: TableProps) => {
  const {
    Table = props => <table {...props} />,
    Body = props => <tbody {...props} />,
    Head = props => <thead {...props} />,
    Cell = props => <td {...props} />,
    HeaderRow = props => <tr {...props} />,
    Row = props => <tr {...props} />,
    HeaderCell = props => <th {...props} />,
    cellRenderer = (row, column, defaultValue) => defaultValue,
    headingRenderer = (column, defaultValue) => defaultValue,
    data = [],
    columns = [],
    classNames = {}
  } = props

  return (
    <Table className={classnames(classNames.table)}>
      <Head className={classnames(classNames.header)}>
        <HeaderRow className={classnames(classNames.headerRow)}>
          {columns.map((column: Column) => (
            <HeaderCell
              className={classnames(classNames.heading)}
              key={column.name}
              column={column}
            >
              {headingRenderer(column, get(column, 'heading', ''))}
            </HeaderCell>
          ))}
        </HeaderRow>
      </Head>
      <Body className={classnames(classNames.body)}>
        {data.map((row: Object) => (
          <Row className={classnames(classNames.row)} key={row.id}>
            {columns.map((column: Column) => {
              const defaultValue: string = get(row, column.name, '')
              return (
                <Cell
                  className={classnames(classNames.cell)}
                  key={`${row.id}-${column.name}`}
                >
                  {cellRenderer(column, row, defaultValue)}
                </Cell>
              )
            })}
          </Row>
        ))}
      </Body>
    </Table>
  )
}

module.exports = TableWrapper
