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
import AvailableHoursScreen from './screens/TeachersAvailableHoursScreen'; 
import EvaluateTeachersScreen from './screens/ApplicationEvaluationScreen';
import UserManagerScreen from './screens/UserManagerScreen'; 
import UploadFilesScreen from './screens/UploadFilesScreen';
import MyStudentsScreen from './screens/MyStudentsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="MainMenu" 
          component={MainMenuScreen} 
          options={{ 
            headerShown: true, 
            title: 'Main Menu' 
          }} 
        />
        <Stack.Screen 
          name="ProgressTracker" 
          component={ProgressTrackerScreen} 
          options={{ 
            headerShown: true, 
            title: 'Progress Tracker' 
          }} 
        />
        <Stack.Screen 
          name="OnlineLessons" 
          component={OnlineLessonsScreen} 
          options={{ 
            headerShown: true, 
            title: 'Online Lessons' 
          }} 
        />
        <Stack.Screen 
          name="MusicLibrary" 
          component={MusicLibraryScreen} 
          options={{ 
            headerShown: true, 
            title: 'Music Library' 
          }} 
        />
        <Stack.Screen 
          name="SocialNetwork" 
          component={SocialNetworkScreen} 
          options={{ 
            headerShown: true, 
            title: 'Social Network' 
          }} 
        />
        <Stack.Screen 
          name="LearnAndShare" 
          component={LearnAndShareScreen} 
          options={{ 
            headerShown: true, 
            title: 'Learn & Share' 
          }} 
        />
        <Stack.Screen 
          name="AvailableHours" 
          component={AvailableHoursScreen} 
          options={{ 
            headerShown: true, 
            title: 'Available Hours' 
          }} 
        />
        <Stack.Screen 
          name="EvaluateTeachers" 
          component={EvaluateTeachersScreen} 
          options={{ 
            headerShown: true, 
            title: 'Evaluate Teachers' 
          }} 
        />
        <Stack.Screen 
          name="UserManager" 
          component={UserManagerScreen} 
          options={{ 
            headerShown: true, 
            title: 'User Manager' 
          }} 
        />
        <Stack.Screen 
          name="UploadFiles" 
          component={UploadFilesScreen} 
          options={{ 
            headerShown: true, 
            title: 'Upload Files' 
          }} 
        />
        <Stack.Screen 
          name="MyStudents" 
          component={MyStudentsScreen} 
          options={{ 
            headerShown: true, 
            title: 'My Students' 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
