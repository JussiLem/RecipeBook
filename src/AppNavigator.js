import 'react-native-gesture-handler'
import * as React from 'react'
import { SignIn } from './screens/Authenticator/SignIn'
import { SignUp } from './screens/Authenticator/SignUp'
import { Hello } from './screens/Hello'
import { createStackNavigator } from '@react-navigation/stack'
import { ConfirmSignUp } from './screens/Authenticator/ConfirmSignUp'
import { User } from './screens/User'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBar } from './components/TabBar'
import { PURPLE } from './constants'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { ForgotPassSubmit } from './screens/Authenticator/ForgotPassSubmit'
import { Forgot } from './screens/Authenticator/Forgot'
import { Recipes } from './screens/Recipes'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      component={TabBar}
      tabBarPosition={'bottom'}
      lazy={true}
      tabBarOptions={{
        tabBarPosition: 'bottom',
        tabBarComponent: TabBar,
        backBehavior: 'initialRoute',
        lazy: true,
        animationEnabled: true,
        showLabel: true,
        activeTintColor: PURPLE,
        inactiveTintColor: '#390032'
      }
      }
    >
      <Tab.Screen
        name="Recipes"
        component={Recipes}
        options={{
          tabBarLabel: 'Recipes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size}/>
          ),
        }}/>
      <Tab.Screen
        name="USER"
        component={User}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size}/>
          ),
        }}/>
    </Tab.Navigator>
  )
}


const AppNavigator = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Hello'}
        headerMode={'none'}
        screenOptions={{
          gesturesEnabled: false
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp}/>
        <Stack.Screen name="Hello" component={Hello}/>
        <Stack.Screen name="Forgot" component={Forgot}/>
        <Stack.Screen name="ForgotPassSubmit" component={ForgotPassSubmit}/>
        <Stack.Screen name='Recipes' component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
    {/*<NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>*/}
      </>
  )
}


export default AppNavigator
