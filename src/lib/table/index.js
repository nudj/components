// @flow
const React = require('react')
const get = require('lodash/get')
const classnames = require('classnames')

type Column = {
  heading: string,
  name: string
}

type DefaultComponentProps = {
  className: ?string,
  children: React.Node
}

type DefaultHeaderCellProps = {
  className: ?string
}

type DefaultRowProps = {
  className: ?string,
  columns: Array<Column>,
  row: Object,
  renderer: ?Function,
  Cell: Function
}

const renderDataRow: Function = (row: Object, columns: Array<Column>, renderer: ?Function, className: ?string, Cell: Function) => {
  return columns.map((column: Column) => {
    const defaultValue: string = get(row, column.name, '')

    return (
      <Cell
        className={classnames(className)}
        key={`cell-${row.id}-${column.name}`}
      >
        {renderer ? renderer(column, row, defaultValue) : defaultValue}
      </Cell>
    )
  })
}

const renderHeading: Function = (column: Column, renderer: ?Function) => {
  const defaultValue: string = get(column, 'heading', '')
  return renderer ? renderer(column, defaultValue) : defaultValue
}

const defaultTable: Function = (props: DefaultComponentProps) => (
  <table className={classnames(props.className)}>{props.children}</table>
)
const defaultBody: Function = (props: DefaultComponentProps) => (
  <tbody className={classnames(props.className)}>{props.children}</tbody>
)
const defaultHead: Function = (props: DefaultComponentProps) => (
  <thead className={classnames(props.className)}>{props.children}</thead>
)
const defaultCell: Function = (props: DefaultComponentProps) => (
  <td className={classnames(props.className)}>{props.children}</td>
)
const defaultHeaderRow: Function = (props: DefaultComponentProps) => (
  <tr className={classnames(props.className)}>{props.children}</tr>
)

const defaultHeaderCell: Function = (props: DefaultHeaderCellProps) => {
  const column: Column = get(props, 'column')
  const renderer: Function = get(props, 'renderer')

  return (
    <th className={classnames(props.className)}>
      {renderHeading(column, renderer)}
    </th>
  )
}

const defaultRow: Function = (props: DefaultRowProps) => {
  const className: ?string = get(props, 'classNames.cell')
  return (
    <tr className={classnames(props.className)}>
      {renderDataRow(
        props.row,
        props.columns,
        props.renderer,
        className,
        props.Cell
      )}
    </tr>
  )
}

type TableProps = {
  Table: Function,
  Body: Function,
  Head: Function,
  HeaderCell: Function,
  HeaderRow: Function,
  Row: Function,
  Cell: Function,
  headingRenderer: Function,
  cellRenderer: Function
}

const TableWrapper: Function = (props: TableProps) => {
  const {
    Table,
    Body,
    Head,
    HeaderCell,
    HeaderRow,
    Row,
    Cell
  } = props

  const data: Array<Object> = get(props, 'data', [])
  const columns: Array<Column> = get(props, 'columns', [])
  const classNames: Object = get(props, 'classNames', {})

  return (
    <Table className={classnames(classNames.table)}>
      <Head className={classnames(classNames.header)}>
        <HeaderRow className={classnames(classNames.headerRow)}>
          {columns.map((column: Column) => (
            <HeaderCell
              className={classnames(classNames.heading)}
              renderer={props.headingRenderer}
              key={column.name}
              column={column}
            />
          ))}
        </HeaderRow>
      </Head>
      <Body className={classnames(classNames.body)}>
        {data.map((row: Object) => (
          <Row
            columns={columns}
            row={row}
            classNames={classNames}
            className={classnames(classNames.row)}
            renderer={props.cellRenderer}
            Cell={Cell}
            key={row.id}
          />
        ))}
      </Body>
    </Table>
  )
}

TableWrapper.defaultProps = {
  Table: defaultTable,
  Body: defaultBody,
  Head: defaultHead,
  HeaderCell: defaultHeaderCell,
  HeaderRow: defaultHeaderRow,
  Row: defaultRow,
  Cell: defaultCell
}

module.exports = TableWrapper
