import React from 'react';
import {Provider} from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigation';
import store from './src/redux';
import Icons from 'react-native-vector-icons/Ionicons';

Icons.loadFont();

const persistor = persistStore(store);

export default function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </PersistGate>
  );
}
