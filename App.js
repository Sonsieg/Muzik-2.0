import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Intro from './src/container/Auth/Intro';
import Router from './src/router';

export default function App() {
  return (
    <View style={styles.container}>
      <Intro/>
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
