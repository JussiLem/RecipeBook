import React, {useState} from 'react'
import { TouchableHighlight, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

// export default class ViewIngredientsButton extends React.Component {
//   render = () => (
//     <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={this.props.onPress}>
//       <View style={styles.container}>
//         <Text style={styles.text}>View Ingredients</Text>
//       </View>
//     </TouchableHighlight>
//   )
// }

export const ViewIngredientsButton = ({route, navigation}) => {

  return (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={this.props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>View Ingredients</Text>
      </View>
    </TouchableHighlight>
  )
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
}
