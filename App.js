import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/router';
import {Provider} from 'react-redux';
import { store } from './src/store';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack></MyStack>
      </NavigationContainer>
    </Provider>
  );
}
