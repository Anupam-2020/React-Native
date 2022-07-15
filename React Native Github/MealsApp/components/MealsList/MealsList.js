import {View, FlatList, StyleSheet, Text} from 'react-native';
import MealItem from './MealItem';

function MealsList({items, catId}) {
    function renderMealItem(itemData) {

        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }

        return <MealItem title={itemData.item.title} {...mealItemProps} imageUrl={itemData.item.imageUrl} />
    }

    return (
        <View style={styles.container}>
            <Text>MealsOverviewScreen {catId}</Text>
            <FlatList data={items} keyExtractor={(item) => item.id} 
                 renderItem={renderMealItem}/>
        </View>
    )
}


export default MealsList;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})