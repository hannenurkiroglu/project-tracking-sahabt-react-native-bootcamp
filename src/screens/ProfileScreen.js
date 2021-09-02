import React from 'react';
import {View, Text, Switch} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fonts, colors} from '../constants';
import {setTheme} from '../redux/system/actions';
import CustomView from '../components/CustomView';
import Header from '../components/Header';

export default function ProfileScreen() {
  const isDarkMode = useSelector(state => state.system.isDarkMode);

  const dispatch = useDispatch();

  const toggleTheme = val => {
    dispatch(setTheme(val));
  };
  return (
    <CustomView style={{flex: 1}}>
      <Header title="Profile" />
      <Switch onValueChange={val => toggleTheme(val)} value={isDarkMode} />
    </CustomView>
  );
}
