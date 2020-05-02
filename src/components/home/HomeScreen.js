import React, { useState, useEffect } from 'react'
import {
  Button,
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  Slider,
  SafeAreaView,
  Modal
} from 'react-native'
import styles from './styles'
import { API, graphqlOperation } from 'aws-amplify'
import { listCategorys, listRecipes } from '../../graphql/queries'
import { createCategory, createRecipe } from '../../graphql/mutations'
import { Icon } from 'react-native-elements'

const HomeScreen = ({ route, navigation }) => {
  const [recipeForm, setRecipeForm] = useState({
    title: '',
    description: '',
    time: 0,
    photo_url: '',
    photo_array: [],
    category: '',
    ingredients: []
  })
  const [recipes, setRecipes] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    fetchRecipes()
  }, [])
  const setInput = (key, value) => {
    setRecipeForm({
      ...recipeForm,
      [key]: value
    })
  }

  const [categoriesForm, setCategoriesForm] = useState({
    name: '',
    photo_url: '',
  })
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetchCategories()
  }, [])

  const setCategoryInput = (key, value) => {
    setCategoriesForm({
      ...categoriesForm,
      [key]: value
    })
  }

  const addRecipe = async () => {
    try {
      const recipe = { ...recipeForm }
      setRecipes([...recipes, recipe])
      setRecipeForm({
        title: '',
        description: '',
        time: 0,
        photo_url: '',
        photo_array: [],
        category: '',
        ingredients: []
      })
      await API.graphql(graphqlOperation(createRecipe, { input: recipe }))
    } catch (e) {
      console.error('Error creating a new recipe: ', e)
    }
  }

  // const addCategories = async () => {
  //   try {
  //     const categorys = { ...categoriesForm }
  //     setCategories([...categories, categorys])
  //     setCategoriesForm({
  //       name: '',
  //       photo_url: '',
  //     })
  //     await API.graphql(graphqlOperation(createCategory, { input: categorys }))
  //   } catch (e) {
  //     console.error('Error creating a new category: ', e)
  //   }
  // }
  const fetchCategories = async () => {
    try {
      const categoriesData = await API.graphql(graphqlOperation(listCategorys))
      const categories = categoriesData.data.listCategorys.items
      setCategories(categories)
    } catch (e) {
      console.error('error fetching categories', e)
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

  const renderRecipes = ({ item }) => {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)'
                          onPress={() => navigation.navigate('Recipe', { item })}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }}/>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{item.category}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  return (
    <SafeAreaView>
      <Icon
        raised
        icon
        color='black'
        onPress={_ => setModalVisible(true)}
        underlayColor="#0091EA"
        containerStyle={styles.icon}
        name='add'
      />
      <Modal
        visible={modalVisible}
        animationType='slide'
      >
        <View style={{flex: 1}}>
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
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#b9e4c9"
          />
          <Text>
            Time value: {recipeForm.time}
          </Text>
          {/*<Dropdown*/}
          {/*  label='Categories'*/}
          {/*  data={categories}*/}
          {/*/>*/}
          <Button title="Create Recipe" onPress={addRecipe}/>

        </View>
      </Modal>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={e => renderRecipes(e)}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
