import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({ id, title, imageUrl, duration, complexity, affordability, onPress }) {

    const navigation = useNavigation();
    function pressHandler() {
        navigation.navigate('MealsDescription',{
            categoryMealId: id
        });
    }


    return (
        <View > 
            <Pressable android_ripple={{color: '#ccc'}} onPress={pressHandler}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View>
                    <Text>{duration}m</Text>
                    <Text>{complexity.toUpperCase()}</Text>
                    <Text>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>


    )
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})