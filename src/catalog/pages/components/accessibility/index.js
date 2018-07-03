import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Button from '../../../../lib/components/button'
import Icon from '../../../../lib/components/icon'
import ScreenReadable from '../../../../lib/components/screen-readable'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

const AccessibilityDocumentation = () => (
  <Page>
    <p>
      Our accessibility components are used to aid our users in using our website.
    </p>
    <h3>ScreenReadable</h3>
    <p>
      Use ScreenReadable as a way of adding additional context or meaning to
      something that may be difficult for screen reader users to understand.
    </p>
    <ReactCodeSpecimen
      code={dedent`
        <Button>
          <ScreenReadable>Email</ScreenReadable>
          <Icon name='email' />
        </Button>
      `}
    >
      <Button>
        <ScreenReadable>Email</ScreenReadable>
        <Icon name='email' />
      </Button>
    </ReactCodeSpecimen>
  </Page>
)

export default AccessibilityDocumentation
