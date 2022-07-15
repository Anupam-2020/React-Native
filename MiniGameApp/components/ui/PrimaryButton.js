import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function PrimaryButton({ children, onPress }) {
    function pressHandler() {
        console.log('pressed');
    }

    return (
        <View style={styles.buttonOuterContainer}>
        <Pressable onPress={onPress} android_ripple={{color:'#640233'}} style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>
        
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        overflow: 'hidden',
        borderRadius:28,
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary700,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        alignContent: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})