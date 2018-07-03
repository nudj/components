// @flow
import React, { Component } from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import AnimateHeight from '../../../../lib/components/animate-height'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

type Props = {}

type State = {
  animateHeight: boolean,
}

class AnimationDocumentation extends Component<Props, State> {
  state = {
    animateHeight: false
  }

  toggleAnimateHeight = () => {
    this.setState(state => ({
      animateHeight: !state.animateHeight
    }))
  }

  render () {
    const { animateHeight } = this.state

    return (
      <Page>
        <h3>AnimateHeight</h3>
        <p>
          Use this component when you need to reveal or conceal additional content or
          functionality based on user interaction. Typically, this will be of lower
          priority when compared to its surrounding context.
        </p>
        <p>
          Under the hood, it uses{' '}
          <a href='https://stanko.github.io/react-animate-height/' target='_blank'>react-animate-height</a>.
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <AnimateHeight height={ animateHeight ? 'auto' : 0 }>
              <div style={{height: '250px', backgroundColor: 'pink', width: '250px' }} />
            </AnimateHeight>
          `}
        >
          <button onClick={this.toggleAnimateHeight}>Animate height</button>
          <AnimateHeight height={animateHeight ? 'auto' : 0}>
            <div style={{ height: '250px', backgroundColor: 'pink', width: '250px' }} />
          </AnimateHeight>
        </ReactCodeSpecimen>
      </Page>
    )
  }
}

export default AnimationDocumentation
