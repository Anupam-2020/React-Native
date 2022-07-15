import { Text, View, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";


function MealsOverviewScreen({ route, navigation }) {

    // Method-1
    const route1 = useRoute();
    const catId1 = route1.params.categoryId;

    // Method-2 using props.
    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    // // Method-2 of setting title in mealsOverview Screen...........
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title
        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation])

    
    


    // // Method-2 of setting title in mealsOverview Screen...........

    // const categoryTitle = CATEGORIES.find((category) => category.id===catId).title
    // navigation.setOptions({
    //     // title: route.params.title
    //     title: categoryTitle
    // });

    // function renderMealItem(itemData) {
    //     // function pressHandler() {
    //     //     navigation.navigate('MealsDescription', {
    //     //         categoryMealId: itemData.item.id
    //     //     })
    //     // }


    //     const item = itemData.item
    //     const mealItemProps = {
    //         id: item.id,
    //         duration: item.duration,
    //         complexity: item.complexity,
    //         affordability: item.affordability,
    //     }


    //     return <MealItem title={itemData.item.title} {...mealItemProps} imageUrl={itemData.item.imageUrl} /*onPress={pressHandler}*//>
    // }

    // return (
    //     <View style={styles.container}>
    //         <Text>MealsOverviewScreen {catId}</Text>
    //         <FlatList data={displayMeals} keyExtractor={(item) => {
    //             return item.id
    //         }} renderItem={renderMealItem}>

    //         </FlatList>
    //     </View>
    // )

    return (
        <MealsList items={displayMeals} catId={catId}/>
    )
}


export default MealsOverviewScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16
//     }
// })