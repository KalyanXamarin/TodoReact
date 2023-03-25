import {View, Text, Image, StyleSheet} from 'react-native';

const LoginView = () => {
  return (
    <View style={styles.rootElementStyle}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/icons/appicon.png')}
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
