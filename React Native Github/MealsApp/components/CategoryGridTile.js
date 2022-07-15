import { Pressable, View, Text, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native';

function CategoryGridTile({title,color, onPress}) {
    // const navigation = useNavigation();
    // function pressHandler() {
    //     navigation.navigate('MealsOverview')
    // }
    
    return (
        <View style={[styles.gridItem, {backgroundColor: color}]}>
            <Pressable style={styles.button} android_ripple={{color: '#ccc'}} onPress={onPress}>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text style={{color: 'black'}}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
    }, button: {
        flex: 1
    }
})