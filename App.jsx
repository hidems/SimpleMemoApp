import React from 'react'; // No need it current version of React Native
import { LogBox } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

import { firebaseConfig } from './env';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='MemoList'
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'SimpleMemoApp',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back', // No need in Android App
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen
          name="MemoList"
          component={MemoListScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

