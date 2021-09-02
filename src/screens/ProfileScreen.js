import React from 'react';
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
import {useDispatch} from 'react-redux';
import {fonts, colors} from '../constants';
import {setTheme, userLogout} from '../redux/system/actions';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import I18n from '../i18n';
import {GetIsDarkMode, GetUserInfo} from '../redux/system/selectors';

export default function ProfileScreen() {
  const logOutText = I18n.t('logOut');

  const isDarkMode = GetIsDarkMode();

  const userInfo = GetUserInfo();

  const dispatch = useDispatch();

  const toggleTheme = val => {
    dispatch(setTheme(val));
  };

  const logOut = () => {
    dispatch(userLogout());
  };

  return (
    <CustomView style={styles.container}>
      <Header title="Profile" />

      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <View style={styles.infoBox}>
              <Image
                source={{uri: userInfo.profilePic}}
                style={{width: 100, height: 100}}
                resizeMethod="scale"
                resizeMode="contain"
              />
              <View style={styles.cell}>
                <Text style={styles.info}>Ünvan</Text>
                <Text style={styles.info}>{userInfo.title}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.info}>Şirket Adı</Text>
                <Text style={styles.info}>{userInfo.company}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.info}>{userInfo.displayName}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.info}>{userInfo.mobile}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.info}>{userInfo.managerDisplayName}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.info}>{userInfo.unitName}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.info}>{userInfo.profilePic}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Switch
                  onValueChange={val => toggleTheme(val)}
                  value={isDarkMode}
                />
                <Text style={{color: colors.cFFFFFF, marginHorizontal: 10}}>
                  Tema Seçimi
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => logOut()} style={styles.title}>
                  <Text style={{fontSize: fonts.f14, color: colors.white[100]}}>
                    {logOutText}
                  </Text>
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
    marginTop: Platform.OS === 'android' ? 15 : 0,
  },
  cell: {flex: 1},
  topBackground: {},
  title: {marginTop: 10, fontSize: fonts.f12, marginBottom: 5},
  info: {
    fontSize: fonts.f13,
    color: colors.white[100],
  },
  infoBox: {
    marginTop: -10,
    marginHorizontal: 30,
    padding: 20,
    elevation: 3,
  },
  infoContainer: {
    marginTop: 5,
    paddingBottom: 10,
    borderWidth: 0.5,
    borderColor: colors.dark.primary[5],
  },
});
