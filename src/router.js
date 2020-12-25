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

const HomeStack = createStackNavigator(
    {
      SearchTab: {screen: Home},
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
      SearchTab: {screen: UpdateProfile},
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
  
      SearchTab: {
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
      AccountScreen: {
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
  // const AppStack = createStackNavigator(
  //   {
  //     AppTabbar: {screen: AppTabbar},
  //     DetailSourse: {screen: DetailSourse},
  //     BuySourse: {screen: BuySourse},
  //     DetailLearnScreen: {screen: DetailLearnScreen},
  //   },
  //   {
  //     headerMode: 'none',
  //     initialRouteName: 'AppTabbar',
  //     navigationOptions: {
  //       header: null,
  //     },
  //   },
  // );
  const AuthStack = createStackNavigator(
    {
      Login: {screen: Login},
      Registration: {screen: Registration}
      // ForgetPass: {screen: ForgetPass},
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none',
    },
  );
  const AppNavigator = createSwitchNavigator(
    {
      SplashScreen: {screen: Intro},
      // MainIntro: {screen: MainIntro},
      // AppStack: {screen: AppStack},
      // AppTabbar: {screen: AppTabbar},
      AuthStack: {screen: AuthStack},
    },
    {
      initialRouteName: 'SplashScreen',
    },
  );
  const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;