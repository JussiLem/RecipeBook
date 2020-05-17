import React from 'react'
import { CardRecipeDetail } from '../../components/CardRecipeDetail'
import { AppContainer } from '../../components/AppContainer'
import { goBack } from '../../constants'

const RecipeDetail = ({ route, navigation }) => {
  console.log(route)
  return (
    <AppContainer title=" " onPress={goBack(navigation)}>
      <CardRecipeDetail item={route}/>
    </AppContainer>
  )
}

export { RecipeDetail }
