import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from '../redux/system/actions';

export default function HomeScreen() {
  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.system.userInfo);
  console.log('userınfo', userInfo);

  const logOut = () => {
    dispatch(userLogout());
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        Home Screen Hoş Geldin {userInfo.name} {userInfo.surname}
      </Text>
      <Button title="Çıkış Yap" onPress={() => logOut()} />
    </View>
  );
}
