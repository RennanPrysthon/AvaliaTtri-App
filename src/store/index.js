import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import reducers from './ducks';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2 ,
  whitelist: ['auth', 'provas', 'questoes'],
  blacklist: ['feed']
 };

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  pReducer
);
export const persistor = persistStore(store);

