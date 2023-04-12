import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {LoginAsync} from '../services/UserService';
import {useNavigation} from '@react-navigation/native';
import {useNetInfo} from '@react-native-community/netinfo';
import Loader from '../components/Loader';
import AlertComponent from '../components/AlertComponent';
import {GetisEmailValid, GetisPasswordValid} from '../utils/ValidationHelper';

const LoginView = () => {
  const [t] = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isAlertVisible, setisAlertVisible] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const navigation = useNavigation();
  const isConnected = useNetInfo();

  const doLogin = async () => {
    if (isConnected) {
      setShowLoader(true);
      const token = await LoginAsync(email, password);
      setShowLoader(false);
      if (token.access_token) {
        navigation.navigate('Home');
      }
    } else {
      setAlertMessage('No Internet Please Try again');
      setisAlertVisible(true);
    }
  };

  const SetEmailValidate = (email: string) => {
    setEmail(email);
    setIsEmailValid(GetisEmailValid(email));
  };
  const SetPasswordValidate = (password: string) => {
    setEmail(password);
    setIsPasswordValid(GetisPasswordValid(password));
  };

  return (
    <View style={styles.rootElementStyle}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/icons/appicon.png')}
      />
      <TextInput
        style={styles.inputView}
        placeholder={t('login.email')}
        defaultValue={email}
        onChangeText={email => SetEmailValidate(email)}
      />
      <TextInput
        style={styles.inputView}
        placeholder={t('login.password')}
        defaultValue={password}
        secureTextEntry={true}
        onChangeText={p => SetPasswordValidate(p)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => doLogin()}>
        <Text style={styles.loginText}>{t('login.submit')}</Text>
      </TouchableOpacity>
      <Text style={styles.registerTextStyle}>Register</Text>
      <Loader isVisible={showLoader} />
      <AlertComponent
        heading={alertMessage}
        isVisible={isAlertVisible}
        yesText="Ok"
        noText="NO"
        onPressYes={() => {
          console.log(isAlertVisible);
          setisAlertVisible(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootElementStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyle: {
    marginBottom: 40,
    height: 100,
    width: 100,
  },

  inputView: {
    backgroundColor: '#E4E8F0',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },

  loginButton: {
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#2E5BFF',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },

  loginText: {
    color: '#FFFFFF',
  },

  registerTextStyle: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
    marginTop: 15,
  },
});

export default LoginView;
