import React, { Component } from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import CheckboxList from '../../../../lib/components/checkbox-list'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

const data = [{
  name: 'Robyn McGirl',
  title: 'CEO'
}, {
  name: 'Nicholas Collings',
  title: 'CTO'
}, {
  name: 'Jamie Gunson',
  title: 'Head of Product'
}, {
  name: 'Jim Hynes',
  title: 'Legend'
}, {
  name: 'Tim Robinson',
  title: 'Software Engineer'
}, {
  name: 'Richard Palmer',
  title: 'Software Engineer'
}]

const ExampleListItem = ({ name, title }) => (
  <div
    style={{
      padding: '16px'
    }}
  >
    <p
      style={{
        fontFamily: '"jan", "-apple-system", "BlinkMacSystemFont", "helvetica neue", "helvetica", "roboto", "arial", "sans-serif"',
        fontWeight: 'bold',
        fontSize: '18px',
        color: '#002D72'
      }}
    >
      {name}
    </p>
    <p
      style={{
        fontFamily: '"jan", "-apple-system", "BlinkMacSystemFont", "helvetica neue", "helvetica", "roboto", "arial", "sans-serif"',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#E35205'
      }}
    >
      {title}
    </p>
  </div>
)

export default class FormDocumentation extends Component {
  state = {
    listmultiselectJoined: [],
    listmultiselectSeparate: []
  }

  handleArrayChange = ({ name, values }) => {
    this.setState({
      [name]: values
    })
  }

  render () {
    const {
      listmultiselectJoined,
      listmultiselectSeparate
    } = this.state

    return (
      <Page>
        <h3>Selectable Lists</h3>
        <p>
          Use the CheckboxList component when the user should be able to
          select one or more of the list items to work on or with. Think mass
          deletion, or mass sharing.
        </p>
        <p>
          By default the CheckboxList component renders each item joined.
          Use this view when the children have one or less actions that can be
          performed on them when clicked.
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <CheckboxList
              name='people'
              onChange={this.handleArrayChange}
              values={selectedPeople}
              joined
            >
              {listItem => data.map((d, i) => listItem({
                id: d.id,
                key: d.id,
                value: d.id,
                children: <ExampleListItem {...d} />
              }))}
            </CheckboxList>
          `}
        >
          <CheckboxList
            name='listmultiselectJoined'
            onChange={this.handleArrayChange}
            values={listmultiselectJoined}
            joined
          >
            {listItem => data.map((d, i) => listItem({
              id: `${i}-joined`,
              key: `${i}-joined`,
              value: `${i}-joined`,
              children: <ExampleListItem {...d} />
            }))}
          </CheckboxList>
        </ReactCodeSpecimen>
        <h4>Separate Items</h4>
        <p>
          In scenarios where individual items have more than one action,
          e.g., a job where the user can share it, view the listing page and
          view the applicants, change `joined` to `false` and render the items
          as individual cards.
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <CheckboxList
              name='people'
              onChange={this.handleArrayChange}
              values={selectedPeople}
              joined={false}
            >
              {listItem => data.map((d, i) => listItem({
                id: d.id,
                key: d.id,
                value: d.id,
                children: <ExampleListItem {...d} />
              }))}
            </CheckboxList>
          `}
        >
          <CheckboxList
            name='listmultiselectSeparate'
            onChange={this.handleArrayChange}
            values={listmultiselectSeparate}
            joined={false}
          >
            {listItem => data.map((d, i) => listItem({
              id: `${i}-separate`,
              key: `${i}-separate`,
              value: `${i}-separate`,
              children: <ExampleListItem {...d} />
            }))}
          </CheckboxList>
        </ReactCodeSpecimen>
      </Page>
    )
  }
}
