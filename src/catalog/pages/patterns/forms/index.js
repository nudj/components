// @flow
import React, { Component } from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Input from '../../../../lib/components/input'
import Checkbox from '../../../../lib/components/checkbox'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

type Props = {}

type State = {
  input: string,
  error: string,
  checkbox: boolean
}

export default class FormDocumentation extends Component<Props, State> {
  handleChange: Function
  handleToggle: Function

  constructor (props: Object) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)

    this.state = {
      input: '',
      error: 'Invalid input',
      checkbox: false
    }
  }

  handleChange ({ name, value }: { name: string, value: string }) {
    this.setState({
      [name]: value
    })
  }

  handleToggle ({ name, checked }: { name: string, checked: boolean }) {
    this.setState({
      [name]: checked
    })
  }

  render () {
    const { input, error, checkbox } = this.state

    return (
      <Page>
        <h3>Input</h3>
        <p>Use the basic input for short, free form text.</p>
        <ReactCodeSpecimen
          code={dedent`
            <Input
              onChange={this.handleChange}
              id="1"
              name="input"
              placeholder="Example input"
              value={value}
            />
          `}
        >
          <Input
            onChange={this.handleChange}
            id='input'
            name='input'
            placeholder='Example input'
            value={input}
          />
        </ReactCodeSpecimen>
        <h3>Input with error</h3>
        <p>
          When an input's value is invalid, you can provide a message to help
          guide the user to correcting the mistake
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <Input
              onChange={this.handleChange}
              id="errored-input"
              name="input"
              placeholder="Example input"
              value={value}
              error="Enter a valid value"
            />
          `}
        >
          <Input
            onChange={this.handleChange}
            id='errored-input'
            name='error'
            value={error}
            error='Enter a valid value'
          />
        </ReactCodeSpecimen>
        <h3>Checkbox</h3>
        <p>
          A checkbox should be used to present a choice to the user, where only
          a binary yes or no response is appropriate.
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange}
              label='Subscribe'
              name='subscription'
              value='nudj-newsletter'
              id='subscription'
            />
          `}
        >
          <Checkbox
            checked={checkbox}
            label='Subscribe'
            onChange={this.handleToggle}
            name='checkbox'
            value='checkbox'
            id='checkbox'
          />
        </ReactCodeSpecimen>
      </Page>
    )
  }
}
