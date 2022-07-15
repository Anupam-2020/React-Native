import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Pressable, FlatList } from 'react-native';
import GoalInput from './components/goalInput';



export default function App() {

  
  const [courseGoals, setCourseGoals] = useState([]);
  

  function addInputHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [...currentGoals, {text:enteredGoalText, id: Math.random().toString()}])
  }

  function onDeleteItem(id) {
    setCourseGoals((currentValue) => {
      return currentValue.filter((goal) => goal.id !== id)
    })
    console.log(id)
  }


  function renderListItem(data) {
    return (
      <Pressable onPress={onDeleteItem.bind(this, data.item.id)}>
      <View style={styles.goalItem}>
        <Text style={{color: 'white'}}>{data.item.text}</Text>
      </View>
      </Pressable>
    )
  }

  return (
    <View style={styles.container}>
      <GoalInput  onAddGoal={addInputHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={renderListItem} keyExtractor={(item, index) => item.id}/>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16

  },
  goalsContainer: {
    flex: 4
  },
  goalItem: {
    margin: 4,
    backgroundColor: 'indigo',
    color: 'white',
    borderRadius: 5,
    padding: 8
  }
});