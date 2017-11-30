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

type StyleSheetType = {
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
  styleSheet: StyleSheetType,
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
    styleSheet
  } = props

  const style = mergeStyleSheets(defaultStylesheet, styleSheet)

  return (
    <Table className={css(style.root)}>
      <Head className={css(style.header)}>
        <HeaderRow className={css(style.headerRow)}>
          {columns.map((column: Column) => (
            <HeaderCell className={css(style.heading)} key={column.name}>
              {headingRenderer(column, column.heading)}
            </HeaderCell>
          ))}
        </HeaderRow>
      </Head>
      <Body className={css(style.body)}>
        {data.map((row: Object) => (
          <Row className={css(style.row)} key={row.id}>
            {columns.map((column: Column) => {
              const defaultValue: string = get(row, column.name, '')
              return (
                <Cell
                  className={css(style.cell)}
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
  styleSheet: {},
  data: [],
  columns: []
}

module.exports = Table
