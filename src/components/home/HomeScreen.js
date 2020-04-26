import React from "react";
import {FlatList, Text, View, TouchableHighlight, Image} from "react-native";
import {recipes} from '../../../data/mockData';
import {getCategoryName} from "../../../data/MockDataApi";
import styles from './styles';

const HomeScreen = ({navigation}) => {
    const renderRecipes = ({item}) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => navigation.navigate('Recipe', {item})}>
            <View style={styles.container}>
                <Image style={styles.photo} source={{uri: item.photo_url}}/>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
            </View>
        </TouchableHighlight>
    );

    return (
        <View>
            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={recipes}
                renderItem={renderRecipes}
                keyExtractor={item => `${item.recipeId}`}
            />
        </View>
    )
}


export default HomeScreen
