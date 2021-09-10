import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {images, colors, fonts} from '../constants';
import Input from '../components/Input';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import DeviceInfo from 'react-native-device-info';
import CustomView from '../components/CustomView';
import {useDispatch} from 'react-redux';
import {hideLoader, setUser, toggleLoader} from '../redux/system/actions';
import I18n from '../i18n';
import axios from '../utils/axios';
import apiConfig from '../config/apiConfig';
import {GetUserInfo} from '../redux/system/selectors';

export default function LoginScreen() {
  const usernameText = I18n.t('username');
  const passwordText = I18n.t('password');
  const rememberMeText = I18n.t('rememberMe');
  const loginText = I18n.t('login');

  const dispatch = useDispatch();

  const [pageData, setPageData] = useState({
    // username: 'SHBTADMIN',
    // password: 'SAHABT_MANAGER',
    username: '',
    password: '',
  });

  useEffect(() => {
    axios.get(apiConfig.baseUrl).then(user => {
      setUser(user.data.results[0]);
      console.log(JSON.stringify(user?.data?.results[0]?.login, null, 4));
    });
  }, []);

  const onChangeText = (key, value) => {
    console.log('onChangeText ', pageData, key, value);
    setPageData(page => ({...page, [key]: value}));
  };

  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMe = () => {
    setRememberMe(remember => !remember);
  };

  const versionNumber = DeviceInfo.getVersion();

  const onLogin = () => {
    try {
      dispatch(toggleLoader());
      // changeLanguage(language);
      // if (
      //   response.data.results[0].login.username === pageData.username &&
      //   response.data.results[0].login.password === pageData.password
      // ) {
      console.log('pageData', pageData.username);
    } catch (error) {
    } finally {
      dispatch(hideLoader());
    }
  };

  // const onLogin = () => {
  //   // !!! Dispatch eksik olursa reducer tetiklenmez
  //   dispatch(toggleLoader());

  //   dispatch(
  //     setUser({
  //       name: 'Hanne',
  //       surname: 'Kıroğlu',
  //       displayName: 'Hanne Kıroğlu',
  //       token: 'asdkfjaldfkj',
  //       company: 'SAHA BT',
  //       mobile: '0542565455',
  //       title: 'Mobile Developer',
  //       managerDisplayName: 'Hannenur Kıroğlu',
  //       unitName: 'Mobil Geliştirici',
  //       profilePic: null,
  //       // 'https://i.pinimg.com/originals/de/8b/34/de8b34604ea0a481162429943796d9df.png',
  //     }),
  //   );

  //   dispatch(hideLoader());
  // };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.container}>
    <CustomView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMethod="scale"
            resizeMode="contain"
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={text => onChangeText('username', text)}
            placeHolder={usernameText}
            value={pageData.username}
            icon={'mail-outline'}
            color={colors.cFFFFFF}
            // style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={text => onChangeText('password', text)}
            placeHolder={passwordText}
            value={pageData.password}
            isHidden
            icon={'lock-outline'}
            color={colors.cFFFFFF}
            // style={styles.input}
          />
        </View>
        <View style={styles.rememberMeContainer}>
          <Checkbox
            onChangeState={() => handleRememberMe()}
            style={{marginRight: 10}}
            checked={rememberMe}
            checkedColor={colors.white[50]}
          />
          <Text style={styles.rememberMeText}>{rememberMeText}</Text>
        </View>
        <View style={{marginVertical: 5}}>
          <Button onPress={() => onLogin()} text={loginText} />
        </View>
      </View>
      <View style={styles.versionNumberContainer}>
        <Text style={styles.versionNumberText}>v{versionNumber}</Text>
      </View>
    </CustomView>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  // input: {
  //   marginVertical: 5,
  // },
  inputContainer: {
    margin: 15,
  },
  logo: {width: 300, height: 100},
  logoContainer: {alignItems: 'center'},
  rememberMeContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 17,
  },
  rememberMeText: {
    fontSize: fonts.f12,
    fontWeight: '500',
    color: colors.cFFFFFF,
  },
  versionNumberText: {
    fontSize: fonts.f12,
    color: colors.cFFFFFF,
  },
  versionNumberContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 15,
  },
});
