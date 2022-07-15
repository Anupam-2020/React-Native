import { Text, View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home() {
    const navigation = useNavigation();
    function pressHandler() {
        navigation.navigate('Changes in Me')
    }


    return (
        <View>
            <Text>Home</Text>
            <View style={styles.buttonStyle}>
            <Button title='Tab Navigation' onPress={pressHandler}/>
            </View>
            
        </View>
    )
}

export default Home;


const styles = StyleSheet.create({
    buttonStyle: {
        padding: 16,
        alignSelf: 'center'
    }
})