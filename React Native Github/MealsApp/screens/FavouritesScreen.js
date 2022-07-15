import { useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/favourites-context";


function FavouritesScreen() {
    
    const favouriteMealsContext = useContext(FavouriteContext);
    const favouriteMeals = MEALS.filter((meal) => {
        return favouriteMealsContext.ids.includes(meal.id);
    });

    if(favouriteMeals.length === 0) {
        return (
        <View style={styles.rootContainer}>
            <Text style={styles.textView}>You have no favourites.</Text>
        </View>
        )
    }

    return(
        <MealsList items={favouriteMeals}/>
    )
}

export default FavouritesScreen;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'white'
    }
})