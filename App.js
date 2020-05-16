import React from 'react'
import { AmplifyProvider } from 'aws-amplify-react-hooks'
import { StatusBar, YellowBox } from 'react-native'
import { Amplify, Analytics } from 'aws-amplify'
import config from './aws-exports'
import AppContainer from './src/AppNavigator'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'

YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps',
  'RCTRootView cancelTouches',
  'not authenticated',
  'Sending `onAnimatedValueUpdate`',
  'Setting a timer'
])


const client = {
  Auth,
  API,
  graphqlOperation
}
AmplifyProvider(client)

const MEMORY_KEY_PREFIX = '@MyStorage:'
let dataMemory = {}
/*
class MyStorage {
  static syncPromise = null

  static setItem(key, value) {
    Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value)
    dataMemory[key] = value
    return dataMemory[key]
  }

  static getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }

  static removeItem(key) {
    Keychain.resetGenericPassword()
    return delete dataMemory[key]
  }

  static clear() {
    dataMemory = {}
    return dataMemory
  }
}*/

Amplify.configure(config)
Analytics.disable()

const App = () => (
  <>
    <AmplifyProvider client={client}>
      <StatusBar barStyle="dark-content"/>
      <AppContainer/>
    </AmplifyProvider>
  </>
)
export default withAuthenticator(App)
