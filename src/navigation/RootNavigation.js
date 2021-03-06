import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../navigation/TabNavigation';
import {useSelector} from 'react-redux';

export const AppScreens = {
  login: 'Login',
  home: 'Home',
};

const Stack = createStackNavigator();

export default function StackNavigator() {
  const isLogin = useSelector(state => state.system.isLogin);
  console.log(isLogin);

  const initialRouteName = isLogin ? AppScreens.home : AppScreens.login;

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      {isLogin ? (
        <Stack.Screen
          name={AppScreens.home}
          component={HomeScreen}
          options={{title: 'Ana Sayfa', headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name={AppScreens.login}
          component={LoginScreen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
}
