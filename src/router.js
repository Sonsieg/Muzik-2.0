import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import asset from './asset';
import Intro from './container/Auth/Intro';
import Login from './container/Auth/Login';
import Registration from './container/Auth/Registration';
import Home from './container/ButtomTab/Home';
import Search from './container/ButtomTab/Search';
import UpdateProfile from './container/ButtomTab/UpdateProfile';
import Demo from './container/Demo';
const HomeStack = createStackNavigator(
    {
      HomeTab: {screen: Home},
    },
    {
      initialRouteName: 'HomeTab',
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    },
  );
  const SearchStack = createStackNavigator(
    {
      SearchTab: {screen: Search},
    },
    {
      initialRouteName: 'SearchTab',
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    },
  );
  const UpdateProfileStack = createStackNavigator(
    {
      UpdateProfileTab: {screen: UpdateProfile},
    },
    {
      initialRouteName: 'UpdateProfileTab',
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    },
  );
  const AppTabbar = createBottomTabNavigator(
    {
      HomeScreen: {
        screen: HomeStack,
        navigationOptions: () => {
          return {
            tabBarLabel: ({focused, tintColor}) => (
              <Tabbar
                focused={focused}
                tintColor={tintColor}
                srcActive={asset.HomeTab}
                srcDeactive={asset.Home_v}
                label="Trang chủ"
              />
            ),
          };
        },
      },
  
      SearchScreen: {
        screen: SearchStack,
        navigationOptions: () => {
          return {
            tabBarLabel: ({focused, tintColor}) => (
              <Tabbar
                focused={focused}
                tintColor={tintColor}
                srcActive={asset.SearchTab}
                srcDeactive={asset.Search_v}
                label="Tìm kiếm"
              />
            ),
          };
        },
      },
      UpdateProfileScreen: {
        screen: UpdateProfileStack,
        navigationOptions: () => {
          return {
            tabBarLabel: ({focused, tintColor}) => (
              <Tabbar
                focused={focused}
                tintColor={tintColor}
                srcActive={asset.Account}
                srcDeactive={asset.Account_v}
                label="Tài khoản"
              />
            ),
          };
        },
      },
    },
    {
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      // animationEnabled : true ,
      initialRouteName: 'HomeScreen',
    },
  );
  const AppStack = createStackNavigator(
    {
      AppTabbar: {screen: AppTabbar},
    },
    {
      headerMode: 'none',
      initialRouteName: 'AppTabbar',
      navigationOptions: {
        header: null,
      },
    },
  );
  
  const AuthStack = createStackNavigator(
    {
      Registration: {screen: Registration},
      Demo: {screen: Demo},

      Login: {screen: Login},
      
    },
    {
      initialRouteName: 'Registration',
      headerMode: 'none',
    },
  );
  
  const AppNavigator = createSwitchNavigator(
    {
      AuthStack: {screen: AuthStack},
      IntroStack: {screen: Intro},
      AppStack: {screen: AppStack},
      Demo : {screen :Demo}
      // AppTabbar: {screen: AppTabbar},
    },
    {
      initialRouteName: 'IntroStack',
    },
  );
  
  const AppContainer = createAppContainer(AppNavigator);
  export default AppContainer;