// @flow
import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Button from '../../../../lib/components/button'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'
import getStyle from './style.css'

const ButtonDocumentation = () => {
  const style: Object = getStyle()

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
          <Button volume="scream">label</Button>
          <Button volume="yell">label</Button>
          <Button volume="shout">label</Button>
          <Button volume="cheer">label</Button>
          <Button>label</Button>
          <Button volume="whistle">label</Button>
          <Button volume="whisper">label</Button>   
        `}
      >
        <div className={style.wrapper}>
          <Button className={style.button} volume='scream'>
            label
          </Button>
          <Button className={style.button} volume='yell'>
            label
          </Button>
          <Button className={style.button} volume='shout'>
            label
          </Button>
          <Button className={style.button} volume='cheer'>
            label
          </Button>
          <Button className={style.button}>label</Button>
          <Button className={style.button} volume='whistle'>
            label
          </Button>
          <Button className={style.button} volume='whisper'>
            label
          </Button>
        </div>
      </ReactCodeSpecimen>
    </Page>
  )
}

export default ButtonDocumentation
