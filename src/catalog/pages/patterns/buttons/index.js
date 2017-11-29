// @flow
import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Button from '../../../../lib/components/button'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'
import { StyleSheet, css } from '../../../../lib/css'
import styleSheet from './style.css'

const ButtonDocumentation = () => {
  const classNames = StyleSheet.create(styleSheet)

  return (
    <Page>
      <p>
        Use buttons as a way to inform the user they are able to perform an
        action.
      </p>
      <p>
        To help the user with wayfinding, we use{' '}
        <a
          href='https://www.viget.com/articles/visual-loudness'
          target='_blank'
        >
          visual loudness
        </a>{' '}
        to help the user identify what the most important actions are on the
        page.
      </p>
      <ReactCodeSpecimen
        code={dedent`
          <Button volume="scream">scream</Button>
          <Button volume="yell">yell</Button>
          <Button volume="shout">shout</Button>
          <Button volume="cheer">cheer</Button>
          <Button>murmur</Button>
          <Button volume="whistle">whistle</Button>
          <Button volume="whisper">whisper</Button>   
        `}
      >
        <div className={css(classNames.wrapper)}>
          <Button styleSheet={{ root: classNames.button }} volume='scream'>
            scream
          </Button>
          <Button styleSheet={{ root: classNames.button }} volume='yell'>
            yell
          </Button>
          <Button styleSheet={{ root: classNames.button }} volume='shout'>
            shout
          </Button>
          <Button styleSheet={{ root: classNames.button }} volume='cheer'>
            cheer
          </Button>
          <Button styleSheet={{ root: classNames.button }}>murmur</Button>
          <Button styleSheet={{ root: classNames.button }} volume='whistle'>
            whistle
          </Button>
          <Button styleSheet={{ root: classNames.button }} volume='whisper'>
            whisper
          </Button>
        </div>
      </ReactCodeSpecimen>
    </Page>
  )
}

export default ButtonDocumentation
