import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../constants';

export default function Checkbox({
  checked,
  checkedColor,
  style,
  onChangeState,
}) {
  return (
    <TouchableOpacity
      // onChangeState varsa onChangeState'i çalıştır.
      // {...style} = eğer dışarıdan style geliyorsa onu da alsın.
      onPress={() => onChangeState && onChangeState(!checked)}
      style={[styles.container, {...style}]}>
      {checked && (
        <Icon
          name="check"
          color={checked ? checkedColor : colors.cFFFFFF}
          size={20}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.white[50],
    borderRadius: 5, //kenarları kıvrık olması için
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
