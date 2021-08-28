import React from 'react';
import {View, Text, Switch} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fonts, colors} from '../constants';
import {setTheme} from '../redux/system/actions';
import CustomView from '../components/CustomView';

export default function ProfileScreen() {
  const isDarkMode = useSelector(state => state.system.isDarkMode);

  const dispatch = useDispatch();

  const toggleTheme = val => {
    dispatch(setTheme(val));
  };
  return (
    <CustomView
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: fonts.f15,
          color: isDarkMode ? colors.dark.text[100] : colors.light.white[100],
        }}>
        Dark Mode
      </Text>

      <Switch onValueChange={val => toggleTheme(val)} value={isDarkMode} />
    </CustomView>
  );
}
