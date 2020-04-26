import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from './home/HomeScreen'
import { RecipeScreen } from './recipe/RecipeScreen'

const Stack = createStackNavigator()

// const DrawerStack = createDrawerNavigator(
//     {
//         Main: Stack
//     }, {
//         drawerPosition: 'left',
//         initialRouteName: 'Main',
//         drawerWidth: 250,
//         // contentComponent: DrawerContainer
//     }
// )

const AppContainer = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Recipe" component={RecipeScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
}
export default AppContainer

