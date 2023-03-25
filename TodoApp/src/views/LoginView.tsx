import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';

const LoginView = () => {
  const [t] = useTranslation();

  return (
    <View style={styles.rootElementStyle}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/icons/appicon.png')}
      />
      <TextInput style={styles.inputView} placeholder={t('login.email')} />
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
