import React, { useState, useEffect } from 'react'
import { Button, FlatList, Text, View, TouchableHighlight, Image, TextInput, Slider } from 'react-native'
import styles from './styles'
import { API, graphqlOperation } from 'aws-amplify'
import { listRecipes } from '../../graphql/queries'
import { createRecipe } from '../../graphql/mutations'

const HomeScreen = ({ navigation }) => {
  const initialState = {
    title: '',
    description: '',
    time: 0,
    photo_url: ''
  }
  const [recipeForm, setRecipeForm] = useState(initialState)
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    fetchRecipes()
  }, [])

  const setInput = (key, value) => {
    setRecipeForm({
      ...recipeForm,
      [key]: value
    })
  }

  const addRecipe = async () => {
    try {
      const recipe = { ...recipeForm }
      setRecipes([...recipes, recipe])
      setRecipeForm(initialState)
      await API.graphql(graphqlOperation(createRecipe, { input: recipe }))
    } catch (e) {
      console.error('Error creating a new recipe: ', e)
    }
  }
  const fetchRecipes = async () => {
    try {
      const recipesData = await API.graphql(graphqlOperation(listRecipes))
      const recipes = recipesData.data.listRecipes.items
      setRecipes(recipes)
    } catch (e) {
      console.error('error fetching recipes', e)
    }
  }

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)'
                        onPress={() => navigation.navigate('Recipe', { item })}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.categoryId}</Text>
      </View>
    </TouchableHighlight>
  )

  return (
    <View>
      <TextInput
        onChangeText={val => setInput('title', val)}
        style={styles.input}
        value={recipeForm.title}
        placeholder="Name"
      />
      <TextInput
        onChangeText={val => setInput('description', val)}
        style={styles.input}
        value={recipeForm.description}
        placeholder="Description"
      />
      <TextInput
        onChangeText={val => setInput('photo_url', val)}
        style={styles.input}
        value={recipeForm.photo_url}
        placeholder="Photo Url"
      />
      <Slider
        step={1}
        minimumValue={0}
        maximumValue={100}
        style={styles.input}
        value={recipeForm.time}
        onValueChange={slideValue => setInput('time', slideValue)}
        minimumTrackTintColor="#1fb28a"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#b9e4c9"
      />
      <Text>
        Time value: {recipeForm.time}
      </Text>
      <Button title="Create Recipe" onPress={addRecipe}/>

      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  )
}


export default HomeScreen
