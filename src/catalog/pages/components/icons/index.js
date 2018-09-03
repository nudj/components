// @flow
import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Icon from '../../../../lib/components/icon'
import icons from '../../../../lib/components/icon/icons'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

const IconographyDocumentation = () => {
  return (
    <Page>
      {Object.keys(icons).map(icon => (
        <ReactCodeSpecimen
          key={icon}
          code={dedent`<Icon name="${icon}" />`}
        >
          <Icon name={icon} />
        </ReactCodeSpecimen>
      ))}
    </Page>
  )
}

export default IconographyDocumentation
