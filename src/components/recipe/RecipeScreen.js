import React, { useState } from 'react'
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { ViewIngredientsButton } from '../buttons/ViewIngredientsButton'
import styles from './styles'
import { API, graphqlOperation } from 'aws-amplify'
import { listCategorys } from '../../graphql/queries'

const { width: viewportWidth } = Dimensions.get('window')

export const RecipeScreen = ({ route, navigation }) => {
  console.log(`Route params: ${JSON.stringify(route)}`)
  const [activeSlide, setActiveSlide] = useState('')
  const [slider1Ref, setSilder1Ref] = useState([])
  const [ingredients, setIngredients] = useState('')
  const [categories, setCategories] = useState([])

  const { item, category } = route.params

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }}/>
      </View>
    </TouchableHighlight>
  )

  if (item.photo_array === undefined) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.title}</Text>
          <View style={styles.infoContainer}>
            {/*<TouchableHighlight*/}
            {/*  onPress={() => navigation.navigate('RecipesList', {*/}
            {/*    category,*/}
            {/*    title*/}
            {/*  })}*/}
            {/*>*/}
            {/*  /!*<Text style={styles.category}>{category*!/*/}
            {/*  /!*  .toUpperCase()}</Text>*!/*/}
            {/*</TouchableHighlight>*/}
          </View>
          <View style={styles.infoContainer}>
            <Image style={styles.infoPhoto} source={require('../../../assets/icons/time.png')}/>
            <Text style={styles.infoRecipe}>{item.time} minutes </Text>
          </View>
          {/*<View style={styles.infoContainer}>*/}
          {/*  <ViewIngredientsButton*/}
          {/*    onPress={() => {*/}
          {/*      const ingredients = item.ingredients*/}
          {/*      const title = 'Ingredients for ' + item.title*/}
          {/*      navigation.navigate('IngredientsDetails', {*/}
          {/*        ingredients,*/}
          {/*        title*/}
          {/*      })*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</View>*/}
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
          </View>
        </View>
      </ScrollView>
    )
  } else {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Carousel
              ref={c => setSilder1Ref(c)}
              data={item.photo_array}
              renderItem={renderImage}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              loop={false}
              autoplay={false}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={index => setActiveSlide(index)}
            />
            <Pagination
              dotsLength={item.photo_array.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="rgba(255, 255, 255, 0.92)"
              dotStyle={styles.paginationDot}
              inactiveDotColor="white"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={slider1Ref}
              tappableDots={!!slider1Ref}
            />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight
              onPress={() => navigation.navigate('RecipesList', {
                category,
                title
              })}
            >
              {/*<Text style={styles.category}>{category*/}
              {/*  .toUpperCase()}</Text>*/}
            </TouchableHighlight>
          </View>

          <View style={styles.infoContainer}>
            <Image style={styles.infoPhoto} source={require('../../../assets/icons/time.png')}/>
            <Text style={styles.infoRecipe}>{item.time} minutes </Text>
          </View>
          {/*<View style={styles.infoContainer}>*/}
          {/*  <ViewIngredientsButton*/}
          {/*    onPress={() => {*/}
          {/*      let ingredients = item.ingredients*/}
          {/*      let title = 'Ingredients for ' + item.title*/}
          {/*      navigation.navigate('IngredientsDetails', {*/}
          {/*        ingredients,*/}
          {/*        title*/}
          {/*      })*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</View>*/}
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
          </View>
        </View>
      </ScrollView>
    )
  }


}
