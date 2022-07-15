import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";



function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');
    function addInputHandler(value) {
        setEnteredGoalText(value)
    }

    function addGoalHandlerOnButtonPress() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }


    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='your goals here' style={styles.textInput} onChangeText={addInputHandler} value={enteredGoalText}/>
            <Button title='Add Goal' onPress={addGoalHandlerOnButtonPress}/>
        </View>
    )
}


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1
    },
    textInput: {
        width: '70%',
        borderWidth: 1,
        padding: 8,
        marginRight: 15,
    },
})