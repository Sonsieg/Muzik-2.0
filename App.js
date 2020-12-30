import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/router';
export default function App() {
  return (
    <NavigationContainer>
    <MyStack></MyStack>
    </NavigationContainer>
  );
}