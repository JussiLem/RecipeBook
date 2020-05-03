import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import * as React from 'react'
import HomeScreen from './home/HomeScreen'
import { RecipeScreen } from './recipe/RecipeScreen'
import { CategoriesScreen } from './categories/CategoriesScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Drawer = createDrawerNavigator()

export default () => {

  return <SafeAreaProvider>
    <NavigationContainer>
      <Drawer.Navigator
        headerMode="none"
        initialRouteName="Home"
        overlayColor="transparent"
        drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 240,
        }}
      >
        <Drawer.Screen options={{ drawerLabel: 'Home' }}
                       name="Home" component={HomeScreen}/>
        <Drawer.Screen options={{ drawerLabel: 'Recipes' }}
                       name="Recipe" component={RecipeScreen}/>
        <Drawer.Screen name="Categories" component={CategoriesScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
}

// export default AppContainer

