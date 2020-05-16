import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { ButtonTab } from './ButtonTab'

const styles = StyleSheet.create({
  tabbar: {
    height: 90,
    flexDirection: 'row',
    backgroundColor: '#0F0F0F',
    borderTopColor: '#0F0F0F',
    overflow: 'hidden',
    borderTopWidth: 1,
    paddingTop: 5,
    paddingBottom: 10
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})

const MainMenuIcons = ['user-secret', 'home']

const TabBar = ({ route, navigation }) => {
  const { jumpTo, activeTintColor, inactiveTintColor } = route.params
  const { routes } = navigation
  const { tabbar, tab } = styles

  return (
    <View style={tabbar}>
      {routes.map((route, index) => {
        const { key } = route
        const focused = index === navigation.index
        const textColor = focused ? activeTintColor : inactiveTintColor
        return (
          <TouchableWithoutFeedback key={`${key}`} onPress={() => jumpTo(key)}>
            <View style={tab}>
              <ButtonTab icon={MainMenuIcons[index]} tintColor={textColor}/>
            </View>
          </TouchableWithoutFeedback>
        )
      })}
    </View>
  )
}

export { TabBar }
