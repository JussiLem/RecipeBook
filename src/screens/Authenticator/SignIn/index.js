import React, { useState, useRef } from 'react'
import { Auth } from 'aws-amplify'
import t from 'tcomb-form-native'
import { Button, Space, TextLink, TextError } from '../../../components'
import { AppContainer } from '../../../components/AppContainer'
import { structSignIn, options } from '../Form'
import { onScreen, goBack } from '../../../constants'
import * as SecureStore from 'expo-secure-store';

const Form = t.form.Form


export const SignIn = ({ route, navigation }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const registerForm = useRef('')

  const _onPress = async () => {
    const validate = registerForm.current.getValue()
    if (validate) {
      setLoading(true)
      setError('')
      try {
        const { email, password } = userInfo
        const user = await Auth.signIn(email, password)
        await SecureStore.setItemAsync('email', email)
        await SecureStore.setItemAsync('password', password)
        user && onScreen('Recipes', navigation)()
        setLoading(false)
      } catch (err) {
        setLoading(false)
        if (err.code === 'UserNotConfirmedException') {
          setError('Account not verified yet')
        } else if (err.code === 'PasswordResetRequiredException') {
          setError('Existing user found. Please reset your password')
        } else if (err.code === 'NotAuthorizedException') {
          setError('Forgot Password?')
        } else if (err.code === 'UserNotFoundException') {
          setError('User does not exist!')
        } else {
          setError(err.code)
        }
      }
    } else {
      setError('Invalid Form')
    }
  }

  return (
    <>
      <AppContainer onPress={goBack(navigation)} title="Sign In" loading={loading}>
        <Space height={70} />
        <Form
          ref={registerForm}
          type={structSignIn}
          options={options}
          value={userInfo}
          onChange={text => setUserInfo(text)}
        />
        <Space height={10} />
        {error !== 'Forgot Password?' && <TextError title={error} />}
        {error === 'Forgot Password?' && (
          <TextLink title={error} onPress={onScreen('Forgot', navigation, userInfo.email)} />
        )}
        <Space height={50} />
        <Button title="Sign In" onPress={_onPress} />
      </AppContainer>
    </>
  )
}

