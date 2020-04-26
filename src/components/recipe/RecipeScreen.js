import React, {useState} from 'react';
import {
    ScrollView,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { getCategoryName, getCategoryById } from '../../../data/MockDataApi';
import ViewIngredientsButton from '../buttons/ViewIngredientsButton';
import styles from './styles';

const { width: viewportWidth } = Dimensions.get('window');

export const RecipeScreen = ({route, navigation}) => {
    const [activeSlide, setActiveSlide] = useState('')
    const [slider1Ref, setSilder1Ref] = useState([])
    const [ingredients, setIngredients] = useState('')
    const { item } = route.params;
    const category = getCategoryById(item.categoryId);
    const title = getCategoryName(category.id);

    const renderImage = ({ item }) => (
        <TouchableHighlight>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item }} />
            </View>
        </TouchableHighlight>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.carouselContainer}>
                <View style={styles.carousel}>
                    <Carousel
                        ref={c => setSilder1Ref(c)}
                        data={item.photosArray}
                        renderItem={renderImage}
                        sliderWidth={viewportWidth}
                        itemWidth={viewportWidth}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        firstItem={0}
                        loop={false}
                        autoplay={false}
                        autoplayDelay={500}
                        autoplayInterval={3000}
                        onSnapToItem={index => setActiveSlide(index)}
                    />
                    <Pagination
                        dotsLength={item.photosArray.length}
                        activeDotIndex={activeSlide}
                        containerStyle={styles.paginationContainer}
                        dotColor="rgba(255, 255, 255, 0.92)"
                        dotStyle={styles.paginationDot}
                        inactiveDotColor="white"
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        carouselRef={slider1Ref}
                        tappableDots={!!slider1Ref}
                    />
                </View>
            </View>
            <View style={styles.infoRecipeContainer}>
                <Text style={styles.infoRecipeName}>{item.title}</Text>
                <View style={styles.infoContainer}>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('RecipesList', { category, title })}
                    >
                        <Text style={styles.category}>{getCategoryName(item.categoryId).toUpperCase()}</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.infoContainer}>
                    <Image style={styles.infoPhoto} source={require('../../../assets/icons/time.png')} />
                    <Text style={styles.infoRecipe}>{item.time} minutes </Text>
                </View>
                <View style={styles.infoContainer}>
                    <ViewIngredientsButton
                        onPress={() => {
                            let ingredients = item.ingredients;
                            let title = 'Ingredients for ' + item.title;
                            navigation.navigate('IngredientsDetails', { ingredients, title });
                        }}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
                </View>
            </View>
        </ScrollView>
    )

}
