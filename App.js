import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/container/ButtomTab/Home';
import Intro from './src/container/Auth/Intro';
import Login from './src/container/Auth/Login';
import Registration from './src/container/Auth/Registration';
import Router from './src/router';
// import Login from './src/container/Auth/Login';
export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      {/* <Registration/> */}
      {/* <Login/> */}
      {/* <Intro/> */}
      {/* <Router/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
