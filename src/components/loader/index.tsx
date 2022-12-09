import React, { FC } from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const LoaderComponent:FC = () => {
  return (
    <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>
  </Segment>
  )
}

export default LoaderComponent