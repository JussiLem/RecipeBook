import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight, Modal, TextInput, Button, SafeAreaView
} from 'react-native'
import styles from './styles'
import { API, graphqlOperation } from 'aws-amplify'
import { createCategory } from '../../graphql/mutations'
import { listCategorys } from '../../graphql/queries'
import { Icon } from 'react-native-elements'

export const CategoriesScreen = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
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

  const onPressCategory = item => {
    const title = item.name
    const category  = item
    navigation.navigate('RecipesList', {category, title})
  }

  const addCategories = async () => {
    try {
      const categorys = { ...categoriesForm }
      setCategories([...categories, categorys])
      setCategoriesForm({
        name: '',
        photo_url: '',
      })
      await API.graphql(graphqlOperation(createCategory, { input: categorys }))
    } catch (e) {
      console.error('Error creating a new category: ', e)
    }
  }
  const fetchCategories = async () => {
    try {
      const categoriesData = await API.graphql(graphqlOperation(listCategorys))
      const categories = categoriesData.data.listCategorys.items
      setCategories(categories)
    } catch (e) {
      console.error('error fetching categories', e)
    }
  }

  const renderCategory = ({ item }) => {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => onPressCategory(item)}>
        <View style={styles.categoriesItemContainer}>
          <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
          <Text style={styles.categoriesName}>{item.name}</Text>
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
            onChangeText={val => setCategoryInput('name', val)}
            style={styles.input}
            value={categoriesForm.name}
            placeholder="Category"
          />
          <TextInput
            onChangeText={val => setCategoryInput('photo_url', val)}
            style={styles.input}
            value={categoriesForm.photo_url}
            placeholder="Photo url"
          />
          <Button title="Create Category" onPress={addCategories}/>
          <Icon
            raised
            icon
            color='black'
            onPress={_ => setModalVisible(false)}
            underlayColor="#0091EA"
            containerStyle={styles.icon}
            name='close'
          />
        </View>
      </Modal>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );

}
