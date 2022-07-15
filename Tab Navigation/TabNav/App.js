import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import Settings from './Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function HowIFeel() {
  return (
    <View>
      <Text>How I Feel</Text>
    </View>
  )
}

function Glucose() {
  return (
    <View>
      <Text>Glucose</Text>
    </View>
  )
}

function Trends() {
  return (
    <View>
      <Text>Trends</Text>
    </View>
  )
}

{/* <Tab.Navigator tabBarOptions={{labelStyle: {color:'white'}, style:{backgroundColor: 'blue', borderRadius: 20}}}> */ }

function Drawer() {
  return (
    <Tab.Navigator screenOptions={
      { tabBarLabelStyle: { backgroundColor: '#03c2fc', borderRadius: 30, width: '100%', padding: 8, fontSize: 16 },
        tabBarStyle: { backgroundColor: 'blue', borderRadius: 30,  }, 
        // tabBarItemStyle: { width: '100%' },
        tabBarActiveTintColor: 'red',
        }
        }>
      <Tab.Screen name='Glucose' component={Glucose} />
      <Tab.Screen name='How I feel' component={HowIFeel} />
      <Tab.Screen name='Trends' component={Trends} />
    </Tab.Navigator>
  )
}


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Changes in Me' component={Drawer} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});