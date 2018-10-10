const React = require('react')
const get = require('lodash/get')
const PropTypes = require('prop-types')

const CustomPropTypes = require('../../helpers/prop-types')
const { FS_SHOW, FS_HIDE_CLASS } = require('../../constants')
const { mergeStyleSheets, css } = require('../../css')

const defaultStylesheet = require('./style.css')

const Table = props => {
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
    nonsensitive
  } = props

  const style = mergeStyleSheets(defaultStylesheet, styleSheet)

  return (
    <Table className={css(style.root)}>
      <Head className={css(style.header)}>
        <HeaderRow className={css(style.headerRow)}>
          {columns.map(column => (
            <HeaderCell className={css(!nonsensitive && FS_HIDE_CLASS, style.heading)} key={column.name}>
              {headingRenderer(column, column.heading)}
            </HeaderCell>
          ))}
        </HeaderRow>
      </Head>
      <Body className={css(style.body)}>
        {data.map(row => (
          <Row {...row} className={css(style.row)} key={row.id}>
            {columns.map(column => {
              const defaultValue = get(row, column.name, '')
              return (
                <Cell
                  className={css(!nonsensitive && FS_HIDE_CLASS, style.cell)}
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

Table.propTypes = {
  component: CustomPropTypes.component,
  Body: CustomPropTypes.component,
  Head: CustomPropTypes.component,
  HeaderCell: CustomPropTypes.component,
  HeaderRow: CustomPropTypes.component,
  Row: CustomPropTypes.component,
  Cell: CustomPropTypes.component,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })),
  columns: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string,
    name: PropTypes.string
  })),
  styleSheet: PropTypes.shape({
    root: PropTypes.object,
    header: PropTypes.object,
    headerRow: PropTypes.object,
    heading: PropTypes.object,
    body: PropTypes.object,
    row: PropTypes.object,
    cell: PropTypes.object
  }),
  headingRenderer: PropTypes.func,
  cellRenderer: PropTypes.func,
  nonsensitive: PropTypes.bool
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
  nonsensitive: FS_SHOW
}

module.exports = Table
