import React, { useState, useEffect } from 'react'
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Modal
} from 'react-native'
import styles from './styles'
import { API, graphqlOperation } from 'aws-amplify'
import { listCategorys, listRecipes } from '../../graphql/queries'
import { deleteRecipe } from '../../graphql/mutations'
import { Icon } from 'react-native-elements'
import RecipeForm from '../../components/recipe/RecipeForm'
import { onCreateRecipe, onDeleteRecipe, onUpdateRecipe } from '../../graphql/subscriptions'
import { getNames, useQuery } from 'aws-amplify-react-hooks'

const HomeScreen = ({ route, navigation }) => {
  const [recipes, setRecipes] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const { data, loading, error, fetchMore } = useQuery(
    {
      listRecipes,
      onCreateRecipe,
      onUpdateRecipe,
      onDeleteRecipe
    },
    {
      variables: { limit: 5 }
    },
    getNames({ listRecipes, onCreateRecipe, onUpdateRecipe, onDeleteRecipe })
  )

  const _keyExtractor = obj => obj.id.toString()

  if (loading) {
    return <Text>Loading...</Text>
  }
  if (error) {
    return <Text>Error! {error}</Text>
  }


  useEffect(() => {
    fetchRecipes()
  }, [])


  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetchCategories()
  }, [])


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

  const removeRecipe = async (item) => {
    try {
      console.log(item.id)
      const id = { id: item.id }
      console.log(id)

      await API.graphql(graphqlOperation(deleteRecipe, { input: id }))
    } catch (e) {
      console.error('error deleting recipe', e)
    }
  }

  const renderRecipes = ({ item }) => {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)'
                          onLongPress={_ => removeRecipe(item)}
                          onPress={() => navigation.navigate('Recipes', { item })}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{item.category}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  return (
    <SafeAreaView>
      <View style={{
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <Text style={{ fontSize: 16 }}>Add Recipes</Text>
        <Icon
          raised
          icon
          color='black'
          onPress={_ => setModalVisible(true)}
          underlayColor="#0091EA"
          containerStyle={styles.icon}
          name='add'
        />
      </View>
      <Modal
        visible={modalVisible}
        animationType='slide'
      >
        <RecipeForm navigation={navigation}/>
        <Icon
          raised
          icon
          color='black'
          onPress={_ => setModalVisible(false)}
          underlayColor="#0091EA"
          containerStyle={styles.icon}
          name='close'
        />
      </Modal>
      <FlatList
        vertical
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={e => renderRecipes(e)}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMore}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
