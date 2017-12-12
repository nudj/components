// @flow
import React from 'react'
import { Page } from 'catalog'

import Loader from '../../../../lib/components/loader'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

const LoaderDocumentation = () => {
  return (
    <Page>
      <p>
        Loaders help notify the user that the application is loading content
      </p>
      <ReactCodeSpecimen code='<Loader />'>
        <Loader />
      </ReactCodeSpecimen>
    </Page>
  )
}

export default LoaderDocumentation
