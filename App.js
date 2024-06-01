import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainMenuScreen from './screens/MainMenuScreen';
import ProgressTrackerScreen from './screens/ProgressTrackerScreen';
import OnlineLessonsScreen from './screens/OnlineLessonsScreen';
import MusicLibraryScreen from './screens/MusicLibraryScreen';
import SocialNetworkScreen from './screens/SocialNetworkScreen';
import LearnAndShareScreen from './screens/LearnAndShareScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProgressTracker" component={ProgressTrackerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OnlineLessons" component={OnlineLessonsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MusicLibrary" component={MusicLibraryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SocialNetwork" component={SocialNetworkScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LearnAndShare" component={LearnAndShareScreen} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}