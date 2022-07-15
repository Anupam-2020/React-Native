// import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, Button } from 'react-native';
import { CATEGORIES, MEALS } from './data/dummy-data';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDescriptionScreen from './screens/MealsDescriptionScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouritesScreen from './screens/FavouritesScreen';
import IconButton from './components/IconButton';
import { Ionicons } from '@expo/vector-icons'
import FavouritesContextProvider from './store/context/favourites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: {backgroundColor:'#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveBackgroundColor:'#e4baa1',
      drawerActiveTintColor: '#3f2f25'
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        drawerIcon: (({color, size}) => (
          <Ionicons name="list" color={color} size={size}/>
        ))
      }}/>
      <Drawer.Screen name='Favourites' component={FavouritesScreen} options={{
        drawerIcon: (({color, size}) => (
          <Ionicons name="star" color={color} size={size}/>
        ))
      }}/>
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    /*
      The Stack.Navigator contains the stack of all the screens.
      The Stack.Screen comes at the top is the initial screen by default.
    */
    <>
      <StatusBar style='light' />
      <FavouritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#ccc' }
        }}>
          <Stack.Screen name='Drawer' component={DrawerNavigation} options={{
            title: 'All Categories',
            headerShown: false
          }} />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            // Method-1 of setting title in mealsOverview Screen.
            // options={  
            //   ({ route, navigation }) => {
            //     const catId = route.params.title;
            //     return {
            //       title: catId
            //     }
            //   }}
          />

          <Stack.Screen name='MealsDescription' component={MealsDescriptionScreen} /*options={{headerRight: () => {
            return <Button title='Tap me!' />
          }}}*//>
        </Stack.Navigator>
      </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
