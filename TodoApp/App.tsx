/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RootNavigator from './src/navigator/RootNavigator';
import './src/localization/Localization';
import {NavigationContainer} from '@react-navigation/native';
import Shared from './src/theme/Shared';
import {StatusBar} from 'react-native';

function App() {
  return (
    <NavigationContainer theme={Shared}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
