// @flow
const React = require('react')
const get = require('lodash/get')

const { mergeStyleSheets, css } = require('../../css')

const defaultStylesheet = require('./style.css')

type Row = {
  id: string | number
}

type Column = {
  heading: string,
  name: string
}

type Stylesheet = {
  root?: Object,
  header?: Object,
  headerRow?: Object,
  heading?: Object,
  body?: Object,
  row?: Object,
  cell?: Object
}

type TableProps = {
  component: React.ElementType,
  Body: React.ElementType,
  Head: React.ElementType,
  HeaderCell: React.ElementType,
  HeaderRow: React.ElementType,
  Row: React.ElementType,
  Cell: React.ElementType,
  data: Array<Row>,
  columns: Array<Column>,
  stylesheet: Stylesheet,
  headingRenderer?: (column: Column, defaultValue: string) => React.Node,
  cellRenderer?: (column: Column, row: Row, defaultValue: string) => React.Node
}

const Table = (props: TableProps) => {
  const {
    component: Table,
    Body,
    Head,
    Cell,
    HeaderRow,
    Row,
    HeaderCell,
    cellRenderer = (row, column, defaultValue) => defaultValue,
    headingRenderer = (column, defaultValue) => defaultValue,
    data,
    columns,
    stylesheet
  } = props

  const classNames = mergeStyleSheets(defaultStylesheet, stylesheet)

  return (
    <Table className={css(classNames.root)}>
      <Head className={css(classNames.header)}>
        <HeaderRow className={css(classNames.headerRow)}>
          {columns.map((column: Column) => (
            <HeaderCell className={css(classNames.heading)} key={column.name}>
              {headingRenderer(column, column.heading)}
            </HeaderCell>
          ))}
        </HeaderRow>
      </Head>
      <Body className={css(classNames.body)}>
        {data.map((row: Object) => (
          <Row className={css(classNames.row)} key={row.id}>
            {columns.map((column: Column) => {
              const defaultValue: string = get(row, column.name, '')
              return (
                <Cell
                  className={css(classNames.cell)}
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

Table.defaultProps = {
  component: 'table',
  Head: 'thead',
  HeaderRow: 'tr',
  HeaderCell: 'th',
  Body: 'tbody',
  Row: 'tr',
  Cell: 'td',
  stylesheet: {},
  data: [],
  columns: []
}

module.exports = Table
