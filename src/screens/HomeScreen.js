import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {userLogout} from '../redux/system/actions';

export default function HomeScreen() {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userLogout());
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen Hoş Geldin Adım Soyadım</Text>
      <Button title="Çıkış Yap" onPress={() => logOut()} />
    </View>
  );
}
