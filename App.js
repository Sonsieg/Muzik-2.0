// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import Home from './src/container/ButtomTab/Home';
// import AppContainer from './src';
// import Intro from './src/container/Auth/Intro';
// import Login from './src/container/Auth/Login';
// import Registration from './src/container/Auth/Registration';
// import Router from './src/router';
// import Search from './src/container/ButtomTab/Search';
// import UpdateProfile from './src/container/ButtomTab/UpdateProfile';
// import {Bottom} from './src/router';
// import { NavigationContainer } from '@react-navigation/native';
// export default function App() {
//   return (
//     <View>
//       <NavigationContainer>
//       {/* <AppContainer/> */}
//       <Intro/>
//       </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import * as React from 'react';
import {Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/container/ButtomTab/Home';
import Registration from './src/container/Auth/Registration';
import {createStackNavigator} from '@react-navigation/stack';
import UpdateProfile from './src/container/ButtomTab/UpdateProfile';
import Search from './src/container/ButtomTab/Search';
import asset from './src/asset';
import {scale} from './src/components/ScaleSheet';
import Intro from './src/container/Auth/Intro';
import Login from './src/container/Auth/Login';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      
      tabBarOptions={{
        labelStyle: {
          fontSize: scale(13),
          justifyContent: 'center',
          fontWeight: 'bold',
        },
        activeTintColor: '#483d8b',
        style: {height:scale(60)}
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
            style={{width: scale(27), height: scale(27)}}
              resizeMode='contain'
              source={asset.HomeTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <Image
            style={{width: scale(25), height: scale(25)}}
              resizeMode='contain'
              source={asset.SearchTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Image
            style={{width: scale(27), height: scale(27)}}
              resizeMode='contain'
              source={asset.Account_v}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      headerMode="none"
      
      // screenOptions={{
      //   headerTintColor: 'white',
      //   headerStyle: { backgroundColor: 'tomato' },
      // }}
    >
      <Stack.Screen
        name="Intro"
        component={Intro}
        // options={{
        //   title: 'Awesome app',
        // }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        // options={{
        //   title: 'My profile',
        // }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        // options={{
        //   gestureEnabled: false,
        // }}
      />
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        // options={{
        //   gestureEnabled: false,
        // }}
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <MyStack></MyStack>
    </NavigationContainer>
  );
}