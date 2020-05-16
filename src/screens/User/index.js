import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import * as SecureStore from 'expo-secure-store'
import { Button } from '../../components'
import { AppContainer } from '../../components/AppContainer'
import { goHome } from '../../constants'

const User = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const checkUser = async () => {
      await Auth.currentAuthenticatedUser()
    }
    checkUser()
  })

  const _onPress = async () => {
    setLoading(true)
    try {
      await Promise.all([
        Auth.signOut(),
        SecureStore.deleteItemAsync('email'),
        SecureStore.deleteItemAsync('password')
      ])
      goHome(navigation)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AppContainer message={error} loading={loading}>
      <Button title="Sign Out" onPress={_onPress}/>
    </AppContainer>
  )
}

export { User }
