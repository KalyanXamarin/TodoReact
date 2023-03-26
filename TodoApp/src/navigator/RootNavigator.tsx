import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginView from '../views/LoginView';
import HomeView from '../views/HomeView';
import RegisterView from '../views/RegisterView';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#047ABC',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="Register" component={RegisterView} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
