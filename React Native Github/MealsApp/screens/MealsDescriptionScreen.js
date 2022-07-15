import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavouriteContext } from "../store/context/favourites-context";


function MealsDescriptionScreen({route, navigation}) {

    const favouriteMealsContext = useContext(FavouriteContext);

    const mealId = route.params.categoryMealId;
    const selectedMeal = MEALS.find((meal) => meal.id===mealId)

    const mealIsFavourite = favouriteMealsContext.ids.includes(mealId);

    function headerButtonPressHandler() {
        if(mealIsFavourite) {
            favouriteMealsContext.removeFavourite(mealId)
        }
        else {
            favouriteMealsContext.addFavourite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon = {mealIsFavourite ? 'star' : 'star-outline'} 
                color="white" 
                onPress={headerButtonPressHandler}/>
            },
            title: 'About the Meal'
        })
    },[navigation, headerButtonPressHandler])

    return (
        <ScrollView>
            <Image style={styles.image}source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <View style={styles.desc}>
                <Text style={{padding:6}}>{selectedMeal.complexity}</Text>
                <Text style={{padding:6}}>{selectedMeal.affordability}</Text>
                <Text style={{padding:6}}>{selectedMeal.duration}m</Text>
            </View>
            <Text style={{fontSize:30}}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (<Text key={ingredient}>{ingredient}</Text>))}
            <Text style={{fontSize:30}}>Steps</Text>
            {selectedMeal.steps.map((steps) => (<Text key={steps}>{steps}</Text>))}
        </ScrollView>
    )
}

export default MealsDescriptionScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 24,
        margin: 8,
        color: 'white'
    },
    desc: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        padding:16,
        textAlign:'center',
        color: 'white'
    }
})