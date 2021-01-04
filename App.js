import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/router';
import Profile from './src/container/ButtomTab/UpdateProfile/Profile';
import UpdateProfile from './src/container/ButtomTab/UpdateProfile';
export default function App() {
  return (
    <NavigationContainer>
    <MyStack></MyStack>
    {/* <Profile></Profile> */}
    {/* <UpdateProfile></UpdateProfile> */}
    </NavigationContainer>
  );
}