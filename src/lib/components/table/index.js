// @flow
const React = require('react')
const get = require('lodash/get')

const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
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
  cellRenderer?: (column: Column, row: Row, defaultValue: string) => React.Node,
  nonSensitive?: boolean
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
    styleSheet,
    nonSensitive
  } = props

  const style = mergeStyleSheets(defaultStylesheet, styleSheet)

  return (
    <Table className={css(style.root)}>
      <Head className={css(style.header)}>
        <HeaderRow className={css(style.headerRow)}>
          {columns.map((column: Column) => (
            <HeaderCell className={css(!nonSensitive && FS_HIDE_CLASS, style.heading)} key={column.name}>
              {headingRenderer(column, column.heading)}
            </HeaderCell>
          ))}
        </HeaderRow>
      </Head>
      <Body className={css(style.body)}>
        {data.map((row: Object) => (
          <Row {...row} className={css(style.row)} key={row.id}>
            {columns.map((column: Column) => {
              const defaultValue: string = get(row, column.name, '')
              return (
                <Cell
                  className={css(!nonSensitive && FS_HIDE_CLASS, style.cell)}
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
  Row: ({ className, children }) => <tr className={className}>{children}</tr>,
  Cell: 'td',
  styleSheet: {},
  data: [],
  columns: [],
  nonSensitive: FS_SHOW
}

module.exports = Table
