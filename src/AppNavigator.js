import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
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
import * as SecureStore from 'expo-secure-store'
import { Recipes } from './screens/Recipes'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const getEmail = async () => await SecureStore.getItemAsync('email')

const getPassword = async () => await SecureStore.getItemAsync('password')

const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName={'Recipes'}
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
        <Tab.Screen name="Recipes" component={Recipes}
                    options={{
                      tabBarLabel: 'Recipes',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                      ),
                    }}/>
        <Tab.Screen name="USER" component={User}
                    options={{
                      tabBarLabel: 'User',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                      ),
                    }}/>
      </Tab.Navigator>
    )
}

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Hello'}
      screenOptions={{
        headerShown: false
      }}
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}
    >
      <Stack.Screen options={{ drawerLabel: 'SignIn' }}
                    name="SignIn" component={SignIn}/>
      <Stack.Screen options={{ drawerLabel: 'SignUp' }}
                    name="SignUp" component={SignUp}/>
      <Stack.Screen options={{ drawerLabel: 'ConfirmSignUp' }}
                    name="ConfirmSignUp" component={ConfirmSignUp}/>
      <Stack.Screen options={{ drawerLabel: 'Hello' }}
                    name="Hello" component={Hello}/>
      <Stack.Screen options={{ drawerLabel: 'Forgot' }}
                    name="Forgot" component={Forgot}/>
      <Stack.Screen options={{ drawerLabel: 'ForgotPassSubmit' }}
                    name="ForgotPassSubmit" component={ForgotPassSubmit}/>
    </Stack.Navigator>
  )
}

export default () => {
  let email
  let password
  Promise.all([
    email = getEmail(),
    password = getPassword()
  ])
    .then(response => {
      const [email, password] = response
      if (email && password) {
        console.log('both were found')
        console.log(`email: ${email}`)
      } else {
        console.log('email nor password was found')

      }
    })
    .catch(error => {
      console.error(error)
    })
  if (email && password) {
    return (
      <>
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
        <NavigationContainer>
          <TabNavigator/>
        </NavigationContainer>
      </>
    )
  } else {
    return (
      <>
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
      </>
    )

  }

}

