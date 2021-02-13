import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Image, StyleSheet, View} from 'react-native';

import App from './App';
import configureStore from './store/configureStore';
const {store, persistor} = configureStore();
const logo = require('./images/logo.png');

const styles = StyleSheet.flatten({
  logoWrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 80,
    paddingRight: 80,
  },
  logo: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignSelf: 'stretch',
    resizeMode: 'contain',
  },
});

class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <View style={styles.logoWrapper}>
              <Image source={logo} style={styles.logo} />
            </View>
          }
          persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default Setup;
