import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredGoal) {
        setEnteredGoalText(enteredGoal);
      }

      function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Your Course Goals' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText}/>
            <Button title='Add Goals' onPress={addGoalHandler}/>
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderColor: "#cccccc"
    },
    inputContainer: {
        flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
    marginBottom: 24
    }
})