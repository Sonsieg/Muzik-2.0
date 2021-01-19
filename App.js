import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/router';
import {Provider} from 'react-redux';
import { store } from './src/store';
import IconPlay from './src/components/IconPlay';
import Playmusic from './src/container/ButtomTab/Home/Playmusic';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack></MyStack>
        {/* <Playmusic/> */}
      </NavigationContainer>
     </Provider>
  );
}
