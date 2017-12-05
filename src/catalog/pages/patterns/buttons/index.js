// @flow
import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Button from '../../../../lib/components/button'
import Link from '../../../../lib/components/link'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'
import style from './style.css'

/**
 * NOTE: using import here instead of require makes flow blow up due to destructuring
 */
const { css } = require('../../../../lib/css')

const ButtonDocumentation = () => {
  return (
    <Page>
      <h3>Button</h3>
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
        <div className={css(style.wrapper)}>
          <Button style={style.button} volume='scream'>
            scream
          </Button>
          <Button style={style.button} volume='yell'>
            yell
          </Button>
          <Button style={style.button} volume='shout'>
            shout
          </Button>
          <Button style={style.button} volume='cheer'>
            cheer
          </Button>
          <Button style={style.button}>murmur</Button>
          <Button style={style.button} volume='whistle'>
            whistle
          </Button>
          <Button style={style.button} volume='whisper'>
            whisper
          </Button>
        </div>
      </ReactCodeSpecimen>
      <h3>Link</h3>
      <p>
        In some cases, you may need to render a link to look the same as a
        button. This is useful where the desired action can be achieved through
        navigation, e.g., progressing to the next stage within a wizard-style
        flow, or opening a mailto link.
      </p>
      <ReactCodeSpecimen
        code={dedent`
          <Link volume="scream">scream</Link>
          <Link volume="yell">yell</Link>
          <Link volume="shout">shout</Link>
          <Link volume="cheer">cheer</Link>
          <Link>murmur</Link>
          <Link volume="whistle">whistle</Link>
          <Link volume="whisper">whisper</Link>   
        `}
      >
        <div className={css(style.wrapper)}>
          <Link href='#' style={style.button} volume='scream'>
            scream
          </Link>
          <Link href='#' style={style.button} volume='yell'>
            yell
          </Link>
          <Link href='#' style={style.button} volume='shout'>
            shout
          </Link>
          <Link href='#' style={style.button} volume='cheer'>
            cheer
          </Link>
          <Link href='#' style={style.button}>
            murmur
          </Link>
          <Link href='#' style={style.button} volume='whistle'>
            Link
          </Link>
          <Link href='#' style={style.button} volume='whisper'>
            whisper
          </Link>
        </div>
      </ReactCodeSpecimen>
    </Page>
  )
}

export default ButtonDocumentation
