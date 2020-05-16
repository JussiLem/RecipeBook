import React, { useState, useRef } from 'react'
import { Auth } from 'aws-amplify'
import t from 'tcomb-form-native'
import { Button, Space } from '../../../components'
import { AppContainer } from '../../../components/AppContainer'
import { structForgotPass, options } from '../Form'
import { onScreen, goBack } from '../../../constants'

const Form = t.form.Form


const ForgotPassSubmit = ({ route, navigation }) => {
  const [userInfo, setUserInfo] = useState({
    email: route.params,
    code: '',
    password: '',
    passwordConfirmation: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const registerForm = useRef('')

  const _onPress = async () => {
    setLoading(true)
    const validate = registerForm.current.getValue()
    if (validate) {
      try {
        const { email, code, password } = userInfo
        await Auth.forgotPasswordSubmit(email, code, password)
        onScreen('USER', navigation)()
        setLoading(false)
      } catch (err) {
        setLoading(false)
        setError(err.message)
      }
    }
  }

  return (
    <>
      <AppContainer title="Confirmation" onPress={goBack(navigation)} message={error} loading={loading}>
        <Space height={20} />
        <Form
          ref={registerForm}
          type={structForgotPass}
          options={options}
          value={userInfo}
          onChange={text => setUserInfo(text)}
        />
        <Space height={50} />
        <Button title="Sign In" onPress={_onPress} />
      </AppContainer>
    </>
  )
}

export { ForgotPassSubmit }
