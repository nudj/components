import React from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'
import Video from '../../../../lib/components/video'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

const VideoDocumentation = () => (
  <Page>
    <p>
      A custom video component with simple controls. Muted by default.
    </p>
    <ReactCodeSpecimen
      code={dedent`
        <Video>
          <source src='https://nudjcms.s3.amazonaws.com/assets/videos/demo-jun-18/setup-company.mp4' type='video/mp4' />
          <source src='https://nudjcms.s3.amazonaws.com/assets/videos/demo-jun-18/setup-company.webm' type='video/webm' />
        </Video>
      `}
    >
      <Video>
        <source src='https://nudjcms.s3.amazonaws.com/assets/videos/demo-jun-18/setup-company.mp4' type='video/mp4' />
        <source src='https://nudjcms.s3.amazonaws.com/assets/videos/demo-jun-18/setup-company.webm' type='video/webm' />
      </Video>
    </ReactCodeSpecimen>
  </Page>
)

export default VideoDocumentation
