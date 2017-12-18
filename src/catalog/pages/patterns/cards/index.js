// @flow
import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import { ContactCard } from '../../../../lib'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

const CardsDocumentation = () => {
  return (
    <Page>
      <h3>Contact Card</h3>
      <p>Contact cards are the recommended way of rendering a nudj contact</p>
      <ReactCodeSpecimen
        code={dedent`
          <ContactCard
            name='Ri¢hie $ Ri¢h'
            jobTitle='Managing Director'
            company='Harvey Comics'
            recommendedFor={[
              'Resident DJ',
              'CEO',
              'COO',
              'Personality',
            ]}
          />
        `}
      >
        <ContactCard
          name='Ri¢hie $ Ri¢h'
          jobTitle='Managing Director'
          company='Harvey Comics'
          recommendedFor={['Resident DJ', 'CEO', 'COO', 'Personality']}
        />
      </ReactCodeSpecimen>

      <h4>Contact Card with Action</h4>
      <p>
        Actions can be added to the contact card, to provide greater utility to
        the user
      </p>
      <ReactCodeSpecimen
        code={dedent`
          <ContactCard
            name='Ri¢hie $ Ri¢h'
            jobTitle='Managing Director'
            company='Harvey Comics'
            recommendedFor={[
              'Resident DJ',
              'CEO',
              'COO',
              'Personality',
            ]}
          >
            <button>Message</button>
          </ContactCard>
        `}
      >
        <ContactCard
          name='Ri¢hie $ Ri¢h'
          jobTitle='Managing Director'
          company='Harvey Comics'
          recommendedFor={['Resident DJ', 'CEO', 'COO', 'Personality']}
        >
          <button>Message</button>
        </ContactCard>
      </ReactCodeSpecimen>
    </Page>
  )
}

export default CardsDocumentation
