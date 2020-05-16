import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RecipesMain } from './RecipesMain'
import { RecipeAdd } from './RecipesAdd'
import { RecipeDetail } from './RecipeDetail'

const Stack = createStackNavigator()

const Recipes = () => {
    return (
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="RecipesMain" component={RecipesMain}/>
        <Stack.Screen name="RecipeAdd" component={RecipeAdd}/>
        <Stack.Screen name="RecipeDetail" component={RecipeDetail}/>
      </Stack.Navigator>
    )
}

Recipes.navigationOptions =  ({ navigation }) => {
  let tabBarVisible = true

  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible
  }
}

export { Recipes }
