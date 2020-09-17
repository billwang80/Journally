import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

import styles from './src/styles/style';

import MainScreen from './src/screens/MainScreen';
import NoteScreen from './src/screens/NoteScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Main' component={MainScreen} />
      <Stack.Screen name='Note' component={NoteScreen} />
    </Stack.Navigator>
  );
}

export default App;