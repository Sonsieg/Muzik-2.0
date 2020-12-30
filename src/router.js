import React, {Component} from 'react';
import Home from '../src/container/ButtomTab/Home';
import Search from '../src/container/ButtomTab/Search';
import UpdateProfile from '../src/container/ButtomTab/UpdateProfile';
import {createBottomTabNavigator, createAppContainer} from '@react-navigation/bottom-tabs';
import Login from './container/Auth/Login';
import Registration from './container/Auth/Registration';
import Intro from './container/Auth/Intro';
import { createStackNavigator } from '@react-navigation/stack';
import { scale } from './components/ScaleSheet';
import { Image } from 'react-native';
import asset from './asset';
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
export default MyStack;