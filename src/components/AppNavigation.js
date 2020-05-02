import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import HomeScreen from './home/HomeScreen'
import { RecipeScreen } from './recipe/RecipeScreen'
import { CategoriesScreen } from './categories/CategoriesScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator();

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

export default () =>
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Recipe') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Recipe" component={RecipeScreen} />
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
    </Drawer.Navigator>
  </NavigationContainer>

// export default AppContainer

