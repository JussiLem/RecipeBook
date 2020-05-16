import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PINK } from '../../constants'
import { NineCubesLoader } from 'react-native-indicator'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 200,
    backgroundColor: 'transparent'
  }
})

const Loading = () => (
  <View style={styles.container}>
    <NineCubesLoader color={PINK} size={45}/>
  </View>
)

export { Loading }
