// @flow
import React, { Component } from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import { Modal } from '../../../../lib'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

type Props = {}

type State = {
  active: boolean
}

export default class ModalDocumentation extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      active: false
    }
  }

  handleOpen = () => {
    this.setState({ active: true })
  }

  handleClose = () => {
    this.setState({ active: false })
  }

  render () {
    const { active } = this.state

    return (
      <Page>
        <p>
          Use a modal window when you need to interrupt the user&#39;s flow,
          while keeping the context of the current page. They can be used to
          provide additional information or context, or as a way for stopping
          the user in their tracks so they <strong>must</strong> complete a
          specific interaction. Use sparingly as the interruption will usually
          have a greater cost than value
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <button onClick={this.handleOpen}>Open modal</button>
            <Modal isOpen={active}>
              <button onClick={this.handleClose}>Close modal</button>
            </Modal>
          `}
        >
          <div>
            <button onClick={this.handleOpen}>Open modal</button>
            <Modal isOpen={active} onRequestClose={this.handleClose}>
              <button onClick={this.handleClose}>Close modal</button>
            </Modal>
          </div>
        </ReactCodeSpecimen>
      </Page>
    )
  }
}
