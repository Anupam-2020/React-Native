import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import  GoalItem  from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

  // const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // function goalInputHandler(enteredGoal) {
  //   setEnteredGoalText(enteredGoal);
  // }

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    // setCourseGoals((currentGoals) => [...currentGoals, enteredGoalText])   // For ScrollView
    setCourseGoals((currentGoals) => [
      ...currentGoals, { text: enteredGoalText, id: Math.random().toString() }
    ])  // For FlatList
  }


  function deleteGoalItem(id) {
    // console.log('Delete');
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }


  return (
    <View style={styles.appContainer}>
      {/* <View style={styles.inputContainer}>
        <TextInput placeholder='Your Course Goals' style={styles.textInput} onChangeText={goalInputHandler} />
        <Button title='Add Goals' onPress={addGoalHandler} />
      </View> */}
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        {/*         
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal, key) => <View style={styles.goalItems} key={key}>
            <Text style={{ color: 'white' }}>{key} {goal}</Text>
          </View>)}
        </ScrollView>
         */}

        <FlatList data={courseGoals} alwaysBounceVertical={false} renderItem={(itemData) => {
          return (
            
            // <View style={styles.goalItems}>
            //   <Text style={{ color: 'white' }}> {itemData.item.text}</Text>
            // </View>

            <GoalItem text={itemData.item.text} keyValue={itemData.index} onDeleteItem={deleteGoalItem} id={itemData.item.id}/>
          )
        }} keyExtractor={(item, index) => {
          return item.id  // id is the data's id that is returned in line no. 19
        }} />
      </View>
    </View>
  );
}


// Note1: -> In iOS styles on <Text> does not work. So, all the styles are moved to <View> Tag.

// Note2: -> <ScrollView> is responsible only for providing a scrolling view and the area of the view is determined by the parent tag. So, before <ScrollView> we need to put a <View> Tag and apply all the styles in that view.

// Note3: -> In scrollview, the `alwaysBounceVertical` method is related to iOS.

// Note4: -> <ScrollView> is not good in terms of optimization. We can use <FlatView>



const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
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
  },
  textInput: {
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderColor: "#cccccc"
  },
  goalsContainer: {
    flex: 5
  },
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
    color: 'white'  // Since color is applicable on text and not on view. Also, in react-native cascading/(inheritance of styles) is not supported like in CSS. So, child tag `Text` which contains texts can't take the color value form parent tag `View`. We need to explicitly add color style in `Text` tag. 
  }
});
