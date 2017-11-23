import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Text from '../../../../lib/components/text'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

const PrimitivesDocumentation = () => (
  <Page>
    <p>
      Our Primitive components are the foundation for building other components.
    </p>
    <h3>Text</h3>
    <p>Use text to provide a consistent text styling across body-level copy.</p>
    <ReactCodeSpecimen
      code={dedent`
        <Text>
          Lejo is nudj’s living pattern library and style guide. It’s our
          repository for design patterns, guidelines and React components. It’s
          all the stuff we need to build our applications 🚀
        </Text>
      `}
      span={5}
    >
      <Text>
        Lejo is nudj’s living pattern library and style guide. It’s our
        repository for design patterns, guidelines and React components. It’s
        all the stuff we need to build our applications 🚀
      </Text>
    </ReactCodeSpecimen>
  </Page>
)

export default PrimitivesDocumentation