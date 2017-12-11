import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Dropzone from '../../../../lib/components/dropzone'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

const DropzoneDocumentation = () => (
  <Page>
    <p>
      The dropzone component should be used as per the regular{' '}
      <a href='https://react-dropzone.netlify.com/'>
        React Dropzone documentation
      </a>.
    </p>
    <p>
      There is one exception to this, where we intentionally prevent the
      application of reject styling where the accept property is deemed to be a
      file extension as opposed to a mime-type.{' '}
      <a href='https://github.com/react-dropzone/react-dropzone/issues/171#issuecomment-350724232'>
        See issue #171 for more detail
      </a>.
    </p>
    <p>The below example is purely to demonstrate this difference.</p>
    <ReactCodeSpecimen
      code={dedent`
        <Dropzone accept=".csv" rejectClassName="reject">
          {props => <span />}
        </Dropzone>
      `}
    >
      <Dropzone accept='.csv' rejectClassName='reject'>
        {props => <span />}
      </Dropzone>
    </ReactCodeSpecimen>
  </Page>
)

export default DropzoneDocumentation
