import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Slider, Text, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from '../form/FormInput'
import FormButton from '../form/FormButton'
import { API, graphqlOperation } from 'aws-amplify'
import { createRecipe } from '../../graphql/mutations'
export default ({ route, navigation }) => {
  const [recipes, setRecipes] = useState([])
  const [recipeForm, setRecipeForm] = useState({
    title: '',
    description: '',
    time: 0,
    photo_url: '',
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
      })
      await API.graphql(graphqlOperation(createRecipe, { input: recipe }))
      Alert.alert('A new recipe was created')
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
      <View style={{
      }}>
        <Slider
          step={1}
          style={{
            margin: 15
          }}
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
      </View>
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
  },
  buttonContainer: {
    margin: 25
  },
  input: {
    height: 50,
    marginLeft: 15,
    fontSize: 28,
    backgroundColor: 'white',
    position: 'relative',
    marginBottom: 20,
    padding: 8,
    paddingHorizontal: 8
  }
})
