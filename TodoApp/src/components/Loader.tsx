import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

interface Props {
  isVisible?: boolean;
}

const Loader = ({isVisible}: Props): JSX.Element => {
  return (
    <Modal
      style={{margin: 0, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}
      statusBarTranslucent={true}
      animationType="fade"
      isVisible={isVisible}
      transparent={true}>
      <View style={styles.mainContainer}>
        <ActivityIndicator color="blue" size={80} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
});

export default Loader;
