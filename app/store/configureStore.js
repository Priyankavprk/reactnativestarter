import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'timer',
  ],
};

const persistedReducer = persistCombineReducers(persistConfig, reducer);

export default function configureStore() {
  const enhancer = compose(applyMiddleware(thunk));
  const store = createStore(persistedReducer, undefined, enhancer);

  let persistor = persistStore(store);

  return {store, persistor};
}
