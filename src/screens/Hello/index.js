import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import { Button, Space, TextLink } from '../../components'
import { AppContainer } from '../../components/AppContainer'
import { onScreen } from '../../constants'
import * as SecureStore from 'expo-secure-store'

const Hello = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const init = false
  useEffect(() => {
    setLoading(true)
    const key = async () => {
      try {
        const email = await SecureStore.getItemAsync('email')
        const password = await SecureStore.getItemAsync('password')
        if (password && email) {
          const user = await Auth.signIn(email, password)
          setLoading(false)
          user && navigation.navigate('Recipes')
        } else {
          setLoading(false)
        }
      } catch (err) {
        console.log('error', err)
        setLoading(false)
      }
    }
    key()
  }, [init])
  return (
    <AppContainer loading={loading}>
      <Space height={200} />
      <Button title="Sign In" onPress={onScreen('SignIn', navigation)} />
      <TextLink title="or" />
      <Button title="Sign Up" onPress={onScreen('SignUp', navigation)} />
    </AppContainer>
  )
}

export { Hello }
