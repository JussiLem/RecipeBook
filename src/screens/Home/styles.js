import { StyleSheet } from 'react-native'
import { RecipeCard } from '../../components/AppStyles'

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  input: {
    height: 50,
    width: '100%',
    borderTopWidth: 2,
    borderTopColor: '#42a1f4',
    backgroundColor: 'white',
    position: 'relative',
    marginBottom: 20,
    padding: 8,
    paddingHorizontal: 8
  },
  buttonText: {
    color: 'black',
    fontSize: 19,
    marginBottom: 20
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
  },
})

export default styles
