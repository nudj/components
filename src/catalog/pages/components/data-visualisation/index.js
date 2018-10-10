import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Statistic from '../../../../lib/components/statistic'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

const DataVisualisationDocumentation = () => (
  <Page>
    <h3>Statistic</h3>
    <p>
      Use the statistic component as a way to display specific statistics for a
      user. They&apos;re great for calling out specifics bits of data which are most
      valuable to the user. They&apos;re particularly useful when used along side
      data tables and graphs.
    </p>
    <ReactCodeSpecimen
      code={dedent`
        <Statistic
          value='10'
          label='Referrals'
        />
      `}
    >
      <Statistic
        value='10'
        label='Referrals'
      />
    </ReactCodeSpecimen>
    <h4>Trends and impact</h4>
    <p>Add additional meaning to the statistic, by implying the impact and trend of the data</p>
    <ReactCodeSpecimen
      code={dedent`
        <Statistic
          value='17'
          label='Refferals'
          direction='asc'
          correlation='positive'
        />
        <Statistic
          value='3'
          label='Page views'
          direction='desc'
          correlation='negative'
        />
      `}
    >
      <Statistic
        value='17'
        label='Refferals'
        direction='asc'
        correlation='positive'
      />
      <Statistic
        value='3'
        label='Page views'
        direction='desc'
        correlation='negative'
      />
    </ReactCodeSpecimen>
    <h4>Data comparison</h4>
    <p>
      To give the user even more detail as to the trend of the data, you can
      add additional information for them to compare the value against
    </p>
    <ReactCodeSpecimen
      code={dedent`
        <Statistic
          value='17'
          label='Refferals'
          comparator='10 last week'
          direction='asc'
          correlation='positive'
        />
        <Statistic
          value='3'
          label='Page views'
          comparator='5 last week'
          direction='desc'
          correlation='negative'
        />
      `}
    >
      <Statistic
        value='17'
        label='Refferals'
        comparator='10 last week'
        direction='asc'
        correlation='positive'
      />
      <Statistic
        value='3'
        label='Page views'
        comparator='5 last week'
        direction='desc'
        correlation='negative'
      />
    </ReactCodeSpecimen>
  </Page>
)

export default DataVisualisationDocumentation
