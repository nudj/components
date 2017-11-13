# components

Reusable React components from the nudj platform

## Contributing

### Dependencies

1. Docker
1. Make

### Development

1. `make build` to build the test image
1. `make test` to run the tests one time
1. `make tdd` to run the tdd watcher

### Release

1. Increment `package.json` version
1. Merge into `master`
1. Codefresh will publish to npm

## Components

### Table

- Custom table component for Nudj use.
- At a bare minimum the table needs an array of data and column information to render. For example:

```javascript
const columns = [
  { label: 'Title One', name: 'keyOne' },
  { label: 'Title Two', name: 'keyTwo' }
]

const data = [
  { keyOne: 'valueOneA', keyTwo: 'valueTwoA' },
  { keyOne: 'valueOneB', keyTwo: 'valueTwoB' }
]

return <Table data={data} columns={columns} />
```

- The above will produce a table formatted like this:

<img width="166" alt="screen shot 2017-11-13 at 10 07 30" src="https://user-images.githubusercontent.com/24386407/32720129-822dacce-c85a-11e7-8043-38d1382a8b63.png">

- This is **default behaviour** for the table to retrieve key values from the data based on the value of the label key for the appropriate column.
- Beyond the default behaviour, **all components can be overridden**.  For example, if you wanted to swap out the default table cell component and make all cells render with the word "cat" in red font and have it log out "cat clicked" on click (because why wouldn't you want to do that?), you could do the following:

```javascript
const columns = [
  { label: 'Title One', name: 'keyOne' },
  { label: 'Title Two', name: 'keyTwo' }
]

const data = [
  { keyOne: 'valueOneA', keyTwo: 'valueTwoA' },
  { keyOne: 'valueOneB', keyTwo: 'valueTwoB' }
]

const onClickCell = () => {
  console.log('cat clicked')
}

const tableCell = (props) => {
  <td onClick={onClickCell} style={{color: 'red'}}>cats</td>
}

return <Table data={data} columns={columns} tableCell={tableCell} />
```

- If you want to specify how a header or cell is rendered without overriding the entire component, you can specify a render function.  For example:

```javascript
const columns = [
  { label: 'Title One', name: 'keyOne' },
  { label: 'Title Two', name: 'keyTwo' }
]

const data = [
  { keyOne: 'valueOneA', keyTwo: 'valueTwoA' },
  { keyOne: 'valueOneB', keyTwo: 'valueTwoB' }
]

const cellRenderer = (column, row) => {
  return get(row, column.name) + "!!!"
}

const headingRenderer = (heading, renderer) => {
  return <span style={{color: 'blue'}}>{get(heading, 'label')}</span>
}

  return <Table data={data} columns={columns} cellRenderer={cellRenderer} headingRenderer={headingRenderer} />
}
```

- The above will produce this:

<img width="203" alt="screen shot 2017-11-13 at 11 02 52" src="https://user-images.githubusercontent.com/24386407/32722630-67a98a6e-c862-11e7-941b-b096d16a9c71.png">

- Custom classnames can be applied without overriding the components if desired, using the  `classNames` object.  For example:

```javascript
const columns = [
  { label: 'Title One', name: 'keyOne' },
  { label: 'Title Two', name: 'keyTwo' }
]

const data = [
  { keyOne: 'valueOneA', keyTwo: 'valueTwoA' },
  { keyOne: 'valueOneB', keyTwo: 'valueTwoB' }
]

const classNames = {
  table: styles.table,
  header: styles.header,
  body: styles.body,
  ...etc.
}

return <Table data={data} columns={columns} classNames={classNames} />
```

- List of style names that can be specified: `table`, `header`, `heading`, `headerRow`, `row`, `body`
- List of components that can be overridden: `table`, `tableBody`, `tableHead`, `tableHeading`, `tableRow`, `headerRow`, `tableCell`
