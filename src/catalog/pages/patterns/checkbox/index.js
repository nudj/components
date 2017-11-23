import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'
import Checkbox from '../../../../lib/components/checkbox'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

class CheckboxDocumentation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: true
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler () {
    this.setState({ checked: !this.state.checked })
  }

  render () {
    return (
      <Page>
        <p>
          A checkbox should be used to present a choice to the user, where only
          a binary yes or no response is appropriate.
        </p>
        <ReactCodeSpecimen
          code={dedent`
            onCheckHandler() {
              const checked = !this.state.checked
              this.setState({ checked })
            }

            <Checkbox
              checked={this.state.checked}
              onChange={onCheckHandler}
              label='Subscribe'
              name='subscription'
              value='nudj-newsletter'
              id='subscription-checkbox-1'
            />
          `}
        >
          <Checkbox
            checked={this.state.checked}
            label='Subscribe'
            onChange={this.onChangeHandler}
            name='subscription'
            value='nudj-newsletter'
            id={1}
          />
        </ReactCodeSpecimen>
      </Page>
    )
  }
}

export default CheckboxDocumentation
