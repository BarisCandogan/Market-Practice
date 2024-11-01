import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import BottomNavigator from './src/navigation/bottom';
import {persistStore} from 'redux-persist';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <BottomNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
