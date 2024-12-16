import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './src/navigation/rootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
