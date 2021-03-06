import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  StyleSheet,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fonts, colors} from '../constants';
import {setLanguage, setTheme, userLogout} from '../redux/system/actions';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import CustomText from '../components/Text';
import I18n, {changeLanguage} from '../i18n';
import {GetIsDarkMode, GetUserInfo} from '../redux/system/selectors';
import Dropdown from '../components/Dropdown';

export default function ProfileScreen({navigation}) {
  // const [lang, setLang] = useState('tr');

  const logOutText = I18n.t('logOut');

  const isDarkMode = GetIsDarkMode();

  const language = useSelector(state => state.system.language);
  console.log('Language', language);

  const userInfo = GetUserInfo();
  console.log(
    'profile screen coordinates: ',
    Number(userInfo?.location?.coordinates.latitude),
    ' dongidud: ',
    Number(userInfo?.location?.coordinates.longitude),
  );

  const dispatch = useDispatch();

  const toggleTheme = val => {
    dispatch(setTheme(val));
  };

  const logOut = () => {
    dispatch(userLogout());
  };

  const handleLanguageChange = lang => {
    if (lang) {
      dispatch(setLanguage(lang));
      changeLanguage(lang);
      navigation.navigate('Profile');
    }
  };

  // FIX: Does it work on android? => onDonePress ?
  const onDonePress = () => {
    changeLanguage(language);
    // navigation.navigate('Profile');
  };

  const infoBoxStyle = {
    ...styles.infoBox,
    backgroundColor: isDarkMode
      ? colors.dark.primary[6]
      : colors.light.background,
  };

  const cellStyle = {
    ...styles.cell,
    borderBottomColor: isDarkMode
      ? colors.dark.white[100]
      : colors.dark.primary[5],
  };

  return (
    <CustomView style={styles.container}>
      <Header title="Profile" />

      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {userInfo?.picture ? (
            <Image
              source={{uri: userInfo.picture.medium}}
              style={styles.profileImage}
              resizeMethod="scale"
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require('../assests/images/noImage.jpeg')}
              style={styles.profileImage}
              resizeMethod="scale"
              resizeMode="contain"
            />
          )}
          <View style={styles.cell}>
            <Text style={styles.info}>
              {userInfo?.name?.first + ' ' + userInfo?.name?.last}
            </Text>
          </View>
          <View style={infoBoxStyle}>
            <View style={styles.infoContainer}>
              <View style={cellStyle}>
                <CustomText style={styles.title} text="Gender" />
                <CustomText style={styles.info} text={userInfo?.gender} />
              </View>
              <View style={cellStyle}>
                <CustomText style={styles.title} text="Y??netici Bilgisi" />
                <CustomText
                  style={styles.info}
                  text={userInfo?.name?.first + ' ' + userInfo?.name?.last}
                />
              </View>
              <View style={cellStyle}>
                <CustomText style={styles.title} text="Email" />
                <CustomText style={styles.info} text={userInfo?.email} />
              </View>
              <View style={cellStyle}>
                <CustomText style={styles.title} text="Telefon" />
                <CustomText style={styles.info} text={userInfo?.phone} />
              </View>
              <View style={cellStyle}>
                <CustomText style={styles.title} text="Country" />
                <CustomText
                  style={styles.info}
                  text={userInfo?.location?.country}
                />
              </View>
            </View>
          </View>
          <View style={infoBoxStyle}>
            <View style={styles.infoContainer}>
              <View style={cellStyle}>
                <CustomText style={styles.title} text="Tema Se??imi" />

                <View style={styles.row}>
                  <CustomText style={styles.title} text="Dark Mode" />
                  <Switch
                    onValueChange={val => toggleTheme(val)}
                    value={isDarkMode}
                  />
                </View>
              </View>
              <View style={cellStyle}>
                <CustomText style={styles.title} text="Dil Se??imi" />

                <View style={{marginVertical: 10}}>
                  <Dropdown
                    items={[
                      {label: 'T??rk??e', value: 'tr'},
                      {label: 'English', value: 'en'},
                    ]}
                    value={language}
                    placeholder="Dil Se??iniz"
                    onValueChange={val => handleLanguageChange(val)}
                    onDonePress={() => onDonePress()}
                    borderColor={isDarkMode ? colors.cFFFFFF : colors.c324c94}
                    color={isDarkMode ? colors.cFFFFFF : colors.c324c94}
                  />
                </View>
              </View>
              <View style={{marginVertical: 15}}>
                <TouchableOpacity onPress={() => logOut()}>
                  <CustomText
                    style={{fontWeight: 'bold', fontSize: fonts.f14}}
                    text={logOutText}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  scrollView: {
    paddingBottom: 20,
    margin: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    // to make profile photo round = borderRadius: 50 (IOS)
    borderRadius: 100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cell: {
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.dark.primary[5],
  },
  topBackground: {},
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: fonts.f12,
    marginBottom: 5,
  },
  info: {
    fontSize: fonts.f12,
    fontWeight: '400',
    color: colors.cFFFFFF,
  },
  displayName: {fontSize: fonts.f15, color: colors.white[100]},
  infoBox: {
    width: '100%',
    borderRadius: 6,
    backgroundColor: colors.cFFFFFF,
    marginVertical: 15,
    elevation: 3,
  },
  infoContainer: {
    padding: 10,
    elevation: 3,
    marginTop: 5,
  },
});
