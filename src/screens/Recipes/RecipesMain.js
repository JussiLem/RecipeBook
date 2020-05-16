import React from 'react'
import { FlatList } from 'react-native'
import { Auth } from 'aws-amplify'
import { useQuery, getNames } from 'aws-amplify-react-hooks'
import { listRecipes } from '../../graphql/queries'
import { CardRecipe } from '../../components/CardRecipe'
import { AppContainer } from '../../components/AppContainer'
import { onScreen, BG } from '../../constants'
import { onCreateRecipe, onUpdateRecipe, onDeleteRecipe } from '../../graphql/subscriptions'


const RecipesMain = ({ route, navigation }) => {
  const owner = Auth.user.attributes.sub
  const { data, loading, error, fetchMore } = useQuery(
    {
      listRecipes,
      onCreateRecipe,
      onUpdateRecipe,
      onDeleteRecipe
    },
    {
      variables: { limit: 5 }
    },
    getNames({ listRecipes, onCreateRecipe, onUpdateRecipe, onDeleteRecipe })
  )

  const _renderItem = ({ item }) => {
    const check = owner === item.owner
    console.log(`rendering item: ${JSON.stringify(item)}`)
    return <CardRecipe item={item} onPress={onScreen(check ? 'RecipeAdd' : 'RecipeDetail', navigation, item)} />

    // return <CardRecipe item={item} onPress={onScreen(check ? 'RecipeAdd' : 'RecipeDetail', navigation, item)} />
  }

  const _keyExtractor = obj => obj.id.toString()

  return (
    <AppContainer
      flatlist
      message={error}
      loading={loading}
      iconRight="plus-a"
      colorLeft={BG}
      title=" "
      onPressRight={onScreen('RecipeAdd', navigation)}
    >
      <FlatList
        vertical
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMore}
      />
    </AppContainer>
  )
}

export { RecipesMain }
