import React, { useState } from 'react'
import { YellowBox } from 'react-native'
import { Amplify, API, Auth, graphqlOperation } from 'aws-amplify'
import * as SecureStore from 'expo-secure-store'
import { Alert, StatusBar } from 'react-native-web'
import { AppLoading } from 'expo'
import { AmplifyProvider } from 'aws-amplify-react-hooks'
import AppNavigator from './src/AppNavigator'
import config from './aws-exports'

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

let dataMemory = {}
const MEMORY_KEY_PREFIX = 'MyStorage-'

class MyStorage {
  static setItem(key, value) {
    SecureStore.setItemAsync(MEMORY_KEY_PREFIX + key, value)
    dataMemory[key] = value
    return dataMemory[key]
  }

  static getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }

  static removeItem(key) {
    SecureStore.deleteItemAsync(MEMORY_KEY_PREFIX + key)
    return delete dataMemory[key]
  }

  static clear() {
    dataMemory = {}
    return dataMemory
  }
}

Amplify.configure({
  ...config,
  Analytics: {
    disabled: false
  },
  storage: MyStorage
})


const App = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  const loadResourcesAsync = async () => {
    await Promise.all([
      Font.loadAsync({
        // ...
      }),
    ])
  }

  const handleFinishLoading = () => {
    setLoadingComplete(true)
  }

  const handleLoadingError = () => <Alert>error</Alert>

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    )
  }

  return (
    <>
      <AmplifyProvider client={client}>
        <StatusBar barStyle='dark-content'/>
        <AppNavigator/>
      </AmplifyProvider>
    </>
  )
}
export default App
