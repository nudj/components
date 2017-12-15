// @flow
import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Pill from '../../../../lib/components/pill'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'
import style from './style.css'

/**
 * NOTE: using import here instead of require makes flow blow up due to destructuring
 */
const { css } = require('../../../../lib/css')

const PillDocumentation = () => {
  return (
    <Page>
      <p>
        Use a pill when you need representation additional information, in a
        compact way, such as a job title or how an element is categorised
      </p>
      <ReactCodeSpecimen
        code={dedent`
          <Pill>murmur</Pill>
          <Pill volume="whisper">whisper</Pill>
        `}
      >
        <div className={css(style.wrapper)}>
          <Pill style={style.pill}>murmur</Pill>
          <Pill style={style.pill} volume='whisper'>
            whisper
          </Pill>
        </div>
      </ReactCodeSpecimen>
    </Page>
  )
}

export default PillDocumentation
