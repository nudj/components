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
          <Button volume="shout">shout</Button>
          <Button volume="cheer">cheer</Button>
          <Button>murmur</Button>
        `}
      >
        <div className={css(style.wrapper)}>
          <Button style={style.button} volume='scream'>
            scream
          </Button>
          <Button style={style.button} volume='shout'>
            shout
          </Button>
          <Button style={style.button} volume='cheer'>
            cheer
          </Button>
          <Button style={style.button}>murmur</Button>
        </div>
      </ReactCodeSpecimen>
      <h4>Reduced affordance</h4>
      <p>
        In some cases, it may be appropriate to reduce a button affordance even
        further than normal. Although this won't be a common occurance, you can
        do this by providing the `subtle` prop.
      </p>
      <ReactCodeSpecimen
        code={dedent`
          <Button subtle volume="scream">scream</Button>
          <Button subtle volume="shout">shout</Button>
          <Button subtle volume="cheer">cheer</Button>
          <Button subtle>murmur</Button>
        `}
      >
        <div className={css(style.wrapper)}>
          <Button subtle style={style.button} volume='scream'>
            scream
          </Button>
          <Button subtle style={style.button} volume='shout'>
            shout
          </Button>
          <Button subtle style={style.button} volume='cheer'>
            cheer
          </Button>
          <Button subtle style={style.button}>
            murmur
          </Button>
        </div>
      </ReactCodeSpecimen>
      <h3>Link</h3>
      <p>
        By default, links are rendered to look the same as a button. This is
        useful where the desired action can be achieved through navigation,
        e.g., progressing to the next stage within a wizard-style flow, or
        opening a mailto link.
      </p>
      <ReactCodeSpecimen
        code={dedent`
          <Link volume="scream">scream</Link>
          <Link volume="shout">shout</Link>
          <Link volume="cheer">cheer</Link>
          <Link>murmur</Link>
        `}
      >
        <div className={css(style.wrapper)}>
          <Link href='#' style={style.button} volume='scream'>
            scream
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
        </div>
      </ReactCodeSpecimen>
      <h4>Regular affordance</h4>
      <p>
        Typically, you will use links with the `subtle` property, used the same
        way as the button component
      </p>
      <ReactCodeSpecimen
        code={dedent`
          <Link subtle volume="scream">scream</Link>
          <Link subtle volume="shout">shout</Link>
          <Link subtle volume="cheer">cheer</Link>
          <Link subtle>murmur</Link>
        `}
      >
        <div className={css(style.wrapper)}>
          <Link subtle href='#' style={style.button} volume='scream'>
            scream
          </Link>
          <Link subtle href='#' style={style.button} volume='shout'>
            shout
          </Link>
          <Link subtle href='#' style={style.button} volume='cheer'>
            cheer
          </Link>
          <Link subtle href='#' style={style.button}>
            murmur
          </Link>
        </div>
      </ReactCodeSpecimen>
    </Page>
  )
}

export default ButtonDocumentation
