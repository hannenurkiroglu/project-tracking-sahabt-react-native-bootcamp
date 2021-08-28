import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fonts, colors} from '../constants';
import CustomView from '../components/CustomView';
import {userLogout} from '../redux/system/actions';
import Button from '../components/Button';
import I18n from '../i18n';

export default function HomeScreen() {
  const logOutText = I18n.t('logOut');

  const isDarkMode = useSelector(state => state.system.isDarkMode);

  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.system.userInfo);
  console.log('userInfo', userInfo);

  const logOut = () => {
    dispatch(userLogout());
  };

  return (
    <CustomView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: fonts.f15,
          color: isDarkMode ? colors.dark.text[100] : colors.light.white[100],
        }}>
        Home Screen Hoş Geldin {userInfo.name} {userInfo.surname}
      </Text>
      <Button onPress={() => logOut()} text={logOutText} />
    </CustomView>
  );
}
