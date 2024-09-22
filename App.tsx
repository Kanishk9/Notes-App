import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import NoteEditorScreen from './src/screens/NoteEditorScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="NoteEditorScreen" component={NoteEditorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
