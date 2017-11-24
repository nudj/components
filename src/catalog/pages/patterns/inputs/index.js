// @flow
import React, { Component } from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Input from '../../../../lib/components/input'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

type Props = {}

type State = {
  input: string
}

export default class InputDocumentation extends Component<Props, State> {
  handleChange: Function

  constructor(props: Object) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      input: ''
    }
  }

  handleChange({ value, name }: { value: string, name: string }) {
    this.setState({
      [name]: value
    })
  }

  render() {
    const { input } = this.state
    const errorMessage =
      input === 'invalid' ? 'Ermagerd something wernt wreng' : ''

    return (
      <Page>
        <div style={{ width: '100%' }}>
          <Input
            key={1}
            onChange={this.handleChange}
            id="1"
            name="input"
            placeholder="Example input"
            value={input}
            error={errorMessage}
          />
        </div>
      </Page>
    )
  }
}
