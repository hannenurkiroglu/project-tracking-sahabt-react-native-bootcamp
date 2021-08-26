import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {images, colors} from '../constants';
import Input from '../components/Input';
import Button from '../components/Button';

export default function LoginScreen() {
  const usernameText = 'username';
  const passwordText = 'password';
  const rememberMeText = 'rememberMe';
  const loginText = 'login';

  const [pageData, setPageData] = useState({
    username: '',
    password: '',
  });

  const onChangeText = (key, value) => {
    console.log('onChangeText ', pageData, key, value);
    setPageData(page => ({...page, [key]: value}));
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.container}>
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMethod="scale"
            resizeMode="contain"
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Input
            onChangeText={text => onChangeText('username', text)}
            placeHolder={usernameText}
            value={pageData.username}
            icon={'mail-outline'}
            color={colors.cFFFFFF}
            style={styles.input}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Input
            onChangeText={text => onChangeText('password', text)}
            placeHolder={passwordText}
            value={pageData.password}
            isHidden
            icon={'lock-outline'}
            color={colors.cFFFFFF}
            style={styles.input}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Button
            onPress={() => alert('Giriş Yap Tetiklendi!!')}
            text="Giriş Yap"
          />
        </View>
      </View>
    </View>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: 100,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
  },
  input: {
    marginVertical: 5,
  },
  logo: {width: 300, height: 100},
  logoContainer: {marginBottom: 25, alignItems: 'center'},
});
