import React from 'react'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import AppContainer from './src/components/AppNavigation'

Amplify.configure(config)

export default () => (
  <AppContainer/>

)
