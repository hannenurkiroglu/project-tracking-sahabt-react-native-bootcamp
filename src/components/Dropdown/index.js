import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {colors, fonts} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GetIsDarkMode} from '../../redux/system/selectors';

export default function Dropdown({
  items,
  title,
  value,
  style = {},
  onValueChange,
  placeholder = 'Seçiniz',
  onDonePress = () => {},
}) {
  const isDark = GetIsDarkMode();
  const doneText = 'Tamam';
  return (
    <View>
      <RNPickerSelect
        style={pickerStyles}
        onValueChange={val => onValueChange(val)}
        useNativeAndroidPickerStyle={false}
        placeholder={{label: placeholder, value: null}}
        items={items}
        value={value}
        doneText={doneText}
        onDonePress={() => onDonePress()}
        Icon={() => {
          return (
            <Icon
              name="expand-more"
              size={20}
              color={colors.white[100]}
              style={{paddingVertical: 12, paddingHorizontal: 10}}
            />
          );
        }}
      />
    </View>
  );
}

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: fonts.f13,
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: fonts.f13,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
