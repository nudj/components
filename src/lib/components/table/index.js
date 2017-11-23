// @flow
const React = require('react')
const classnames = require('classnames')
const get = require('lodash/get')
const { merge } = require('@nudj/library')

const getStyle = require('./style.css')

type Row = {
  id: string | number
}

type Column = {
  heading: string,
  name: string
}

type ClassList = {
  root?: string,
  header?: string,
  headerRow?: string,
  heading?: string,
  body?: string,
  row?: string,
  cell?: string
}

type TableProps = {
  component?: Function,
  Body?: Function,
  Head?: Function,
  HeaderCell?: Function,
  HeaderRow?: Function,
  Row?: Function,
  Cell?: Function,
  data: Array<Row>,
  columns: Array<Column>,
  classNames?: ClassList,
  headingRenderer?: Function,
  cellRenderer?: Function
}

const Table = (props: TableProps) => {
  const {
    component: Table = props => <table {...props} />,
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

  const defaultStyles = getStyle()
  const style = merge(defaultStyles, classNames)

  return (
    <Table className={classnames(style.root)}>
      <Head className={classnames(style.header)}>
        <HeaderRow className={classnames(style.headerRow)}>
          {columns.map((column: Column) => (
            <HeaderCell className={classnames(style.heading)} key={column.name}>
              {headingRenderer(column, get(column, 'heading', ''))}
            </HeaderCell>
          ))}
        </HeaderRow>
      </Head>
      <Body className={classnames(style.body)}>
        {data.map((row: Object) => (
          <Row className={classnames(style.row)} key={row.id}>
            {columns.map((column: Column) => {
              const defaultValue: string = get(row, column.name, '')
              return (
                <Cell
                  className={classnames(style.cell)}
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

module.exports = Table
