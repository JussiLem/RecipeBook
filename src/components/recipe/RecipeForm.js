import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Slider, Text } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from '../form/FormInput'
import FormButton from '../form/FormButton'
import { API, graphqlOperation } from 'aws-amplify'
import { createRecipe } from '../../graphql/mutations'

export default ({ route, navigation }) => {
  const [recipeForm, setRecipeForm] = useState({
    title: '',
    description: '',
    time: 0,
    photo_url: '',
    photos: [],
    category: '',
    ingredient: []
  })

  const addRecipe = async () => {
    try {
      const recipe = { ...recipeForm }
      setRecipes([...recipes, recipe])
      setRecipeForm({
        title: '',
        description: '',
        time: 0,
        photo_url: '',
        photos: [],
        category: '',
        ingredients: []
      })
      await API.graphql(graphqlOperation(createRecipe, { input: recipe }))
    } catch (e) {
      console.error('Error creating a new recipe: ', e)
    }
  }

  const setInput = (key, value) => {
    setRecipeForm({
      ...recipeForm,
      [key]: value
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <FormInput
        onChangeText={val => setInput('title', val)}
        value={recipeForm.title}
        placeholder="Enter title"
        name='title'
        autoCapitalize='none'
        iconName='md-cloud-outline'
        iconColor='#2C384A'
      />
      <FormInput
        onChangeText={val => setInput('description', val)}
        value={recipeForm.description}
        placeholder="Enter description"
        name='description'
        iconName='md-radio'
        iconColor='#2C384A'
      />
      <FormInput
        onChangeText={val => setInput('photo_url', val)}
        value={recipeForm.photo_url}
        placeholder="Enter photo Url"
        name='url'
        iconName='md-thunderstorm'
        iconColor='#2C384A'
      />

      <FormInput
        onChangeText={val => setInput('description', val)}
        value={recipeForm.description}
        placeholder="Enter description"
        name='description'
        iconName='md-stopwatch'
        iconColor='#2C384A'
      />
      <Slider
        step={1}
        minimumValue={1}
        maximumValue={100}
        value={recipeForm.time}
        onValueChange={slideValue => setInput('time', slideValue)}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#b9e4c9"
      />
      <Text style={styles.input}>
        Time value: {recipeForm.time}
      </Text>
      <View style={styles.buttonContainer}>
        <FormButton
          buttonType='outline'
          onPress={_ => addRecipe()}
          title='ADD RECIPE'
          buttonColor='#039BE5'
        />
      </View>
      <Button
        title="Don't have the category you want? Add new from here"
        onPress={_ => navigation.navigate('Categories')}
        titleStyle={{
          color: '#F57C00'
        }}
        type='clear'
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  buttonContainer: {
    margin: 25
  }
})
