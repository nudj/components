// @flow
const React = require('react')
const get = require('lodash/get')
const classnames = require('classnames')

type Column = {
  heading: string,
  name: string
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

const renderDataRow: Function = (
  row: Object,
  columns: Array<Column>,
  renderer: ?Function,
  className: ?string,
  Cell: Function
) => {
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
  Table?: Function,
  Body?: Function,
  Head?: Function,
  HeaderCell?: Function,
  HeaderRow?: Function,
  Row?: Function,
  Cell?: Function,
  data: Array<Object>,
  columns: Array<Column>,
  classNames?: Object,
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
    Row = defaultRow,
    HeaderCell = defaultHeaderCell,
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

module.exports = TableWrapper
