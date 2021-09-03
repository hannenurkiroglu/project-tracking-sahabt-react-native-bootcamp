import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fonts, colors} from '../constants';
import CustomView from '../components/CustomView';
import {userLogout} from '../redux/system/actions';
import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import I18n from '../i18n';
import {GetIsDarkMode} from '../redux/system/selectors';

export default function HomeScreen() {
  const [pageData, setPageData] = useState({
    description: '',
    projectId: null,
    time: '',
  });

  const logOutText = I18n.t('logOut');

  const isDarkMode = GetIsDarkMode();

  // FIX: Eğer useSelector ile language bilgisini almazsak HomeScreen'de dil değişmiyor.
  const language = useSelector(state => state.system.language);
  console.log('Language', language);

  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.system.userInfo);
  console.log('userInfo', userInfo);

  const handleLanguageChange = lang => {};

  const onChangeText = (key, text) => {
    setPageData(page => ({...page, [key]: text}));
  };

  // FIX: Does it work on android? => onDonePress ?
  const onDonePress = () => {};

  const saveProjectTimeline = () => {};

  return (
    <CustomView style={{flex: 1}}>
      <Header title="Home" />
      <View style={{flex: 1, marginHorizontal: 15}}>
        <View style={styles.inputContainer}>
          <Dropdown
            items={[
              {label: 'Coffy', value: 1},
              {label: 'Plugger', value: 2},
              {label: 'Saha BT', value: 3},
            ]}
            value={language}
            placeholder="Proje Seçiniz"
            onValueChange={val => handleLanguageChange(val)}
            onDonePress={() => onDonePress()}
            borderColor={isDarkMode ? colors.cFFFFFF : colors.cFFFFFF}
            color={isDarkMode ? colors.cFFFFFF : colors.cFFFFFF}
          />
        </View>
        <View style={styles.inputContainer}>
          <Dropdown
            items={[
              {label: '1 Saat', value: 60},
              {label: '2 Saat', value: 120},
              {label: '3 Saat', value: 180},
              {label: '4 Saat', value: 240},
              {label: '5 Saat', value: 300},
              {label: '6 Saat', value: 360},
              {label: '7 Saat', value: 420},
              {label: '8 Saat', value: 480},
            ]}
            value={language}
            placeholder="Süre Seçiniz"
            onValueChange={val => handleLanguageChange(val)}
            onDonePress={() => onDonePress()}
            borderColor={isDarkMode ? colors.cFFFFFF : colors.cFFFFFF}
            color={isDarkMode ? colors.cFFFFFF : colors.cFFFFFF}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            placeHolder="Proje açıklaması ekleyiniz"
            // style={styles.inputContainer}
            onChangeText={val => onChangeText('description', val)}
            value={pageData.description}
            multiline
            color={colors.cFFFFFF}
          />
        </View>
        <View>
          <Button
            onPress={() => saveProjectTimeline()}
            text={'Çalışmamı Kaydet'}
          />
        </View>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
  },
});
