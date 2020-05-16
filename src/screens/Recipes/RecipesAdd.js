import React, { useRef, useEffect, useState } from 'react'
import t from 'tcomb-form-native'
import { useMutation } from 'aws-amplify-react-hooks'
import { Button, Space, TextLink } from '../../components'
import { Card } from '../../components/Card'
import { AppContainer } from '../../components/AppContainer'
import { options, structRecipe } from '../Authenticator/Form'
import { goBack, PINK } from '../../constants'
import { createRecipe, updateRecipe, deleteRecipe } from '../../graphql/mutations'

const Form = t.form.Form

const RecipeAdd = ({ route, navigation }) => {
  const [check, setOwner] = useState(false)
  const [recipe, setRecipe] = useState({
    id: '',
    title: '',
    description: '',
    time: 0,
    photo_url: ''
  })

  const onChange = item => setRecipe(item)

  useEffect(() => {
    const obj = route.params
    typeof obj !== 'undefined' && setOwner(true)
    setRecipe(obj)
  }, [navigation])

  const [setCreate, setUpdate, setDelete, { loading, error }] = useMutation(recipe)

  const onCreate = async () => (await setCreate(createRecipe)) && goBack(navigation)()
  const onUpdate = async () => (await setUpdate(updateRecipe)) && goBack(navigation)()
  const onDelete = async () => (await setDelete(deleteRecipe)) && goBack(navigation)()

  const registerForm = useRef('')
  return (
    <AppContainer loading={loading} message={error} title="Add" onPress={goBack(navigation)}>
      <Card>
        <Form ref={registerForm} type={structRecipe} options={options} value={recipe} onChange={text => onChange(text)} />
        <Space height={40} />
        <Button title="DONE" onPress={() => (check ? onUpdate() : onCreate())} />
        {check && (
          <>
            <TextLink title="or" />
            <Space height={10} />
            <Button title="DELETE" color={PINK} onPress={onDelete} />
          </>
        )}
        <Space />
      </Card>
    </AppContainer>
  )
}

export { RecipeAdd }
