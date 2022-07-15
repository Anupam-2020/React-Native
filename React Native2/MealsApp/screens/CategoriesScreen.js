import { ScrollView, Text, StyleSheet, FlatList, View, Pressable } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";



function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {
    function pressHandler() {
        navigation.navigate('MealsOverview',{
            categoryId:itemData.item.id,
            // title:itemData.item.title
        })
    }
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    );
}
    
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            // renderItem={(itemData) =>
            //     <View>
            //         <Pressable>
            //             <View>
            //                 <Text>{itemData.item.title}</Text>
            //             </View>
            //         </Pressable>
            //     </View>
            // } 
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;


