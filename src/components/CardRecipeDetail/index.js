import React, { memo } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Text, View, Image } from 'react-native'
import { BLUE } from '../../constants'

const styles = StyleSheet.create({
  card: {
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: BLUE,
    padding: 25,
    marginBottom: 20
  },
  h1: {
    // fontFamily: '3270Narrow',
    color: '#dbdbdb',
    fontSize: 18
  },
  h2: {
    //fontFamily: '3270Narrow',
    color: '#6a676a',
    marginVertical: 15,
    fontSize: 13,
    letterSpacing: 0.92,
    flexGrow: 1
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  h3: {
    color: '#cfcfcf',
    // fontFamily: '3270Narrow',
    textTransform: 'uppercase',
    fontSize: 18,
    letterSpacing: 0.97
  },
  h4: {
    color: '#cfcfcf',
    // fontFamily: '3270Narrow',
    textTransform: 'uppercase',
    fontSize: 18,
    letterSpacing: 1.17
  },
  image: {
    width: '100%',
    height: 250
  },
})
// title, description, time, photo_url, owner

const CardRecipeDetail = ({item, navigation})=> {
  console.log('card recipe detail:')
  console.log(item.params.item)
  const { title, description, time, photo_url, owner } = item.params.item
  console.log(owner)
  const { card, h1, h2, footer, h3, h4 } = styles
  const userSlice = owner.slice(0, 10)
  return (
    <TouchableWithoutFeedback>
      <View style={card}>
        <Text style={h1}>{title}</Text>
        <Text style={h2}>{description}</Text>
        <Image style={styles.image} source={{ uri: photo_url }}/>

        <View style={footer}>
          <Text style={h3}>{userSlice}</Text>
          <Text style={h4}>{time} min</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export { CardRecipeDetail }
