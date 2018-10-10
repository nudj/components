import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Pill from '../../../../lib/components/pill'
import PillGroup from '../../../../lib/components/pill-group'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'
import style from './style.css'
import { css } from '../../../../lib/css'

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
      <h3>Pill Group</h3>
      <p>
        Use a pill group where you need to represent many related yet simple
        information points in a compact way
      </p>
      <ReactCodeSpecimen
        code={dedent`
          <PillGroup values={['One', 'Two', 'Three', 'Four']} />
        `}
      >
        <PillGroup values={['One', 'Two', 'Three', 'Four']} />
      </ReactCodeSpecimen>
    </Page>
  )
}

export default PillDocumentation
