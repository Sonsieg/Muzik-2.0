import React, {Component} from 'react';
import Home from '../src/container/ButtomTab/Home';
import Search from '../src/container/ButtomTab/Search';
import UpdateProfile from '../src/container/ButtomTab/UpdateProfile';
import {createBottomTabNavigator, createAppContainer} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Login from './container/Auth/Login';
import Registration from './container/Auth/Registration';
import Intro from './container/Auth/Intro';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createSwitchNavigator} from 'react-native-switch'
const Tab = createBottomTabNavigator();
// const StackNavigator = createStackNavigator();
// const Bottom = () => {
//   <Tab.Navigator
//     tabBarOptions={{
//       labelStyle: {fontSize: scale(12), justifyContent: 'center'},
//     }}>
//     <Tab.Screen
//       name="Home"
//       component={Home}
//       options={{
//         tabBarLabel: 'Trang chủ',
//         tabBarIcon: ({color, size}) => (
//           <MaterialCommunityIcons
//             style={{padding: scale(6)}}
//             name="home"
//             color="#1e90ff"
//             size={size * 1}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Search"
//       component={Search}
//       options={{
//         tabBarLabel: 'Tìm kiếm',
//         tabBarIcon: ({color, size}) => (
//           <MaterialCommunityIcons
//             style={{padding: scale(6)}}
//             name="book-open-variant"
//             color="#1e90ff"
//             size={size * 1}
//           />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="UpdateProfile"
//       component={UpdateProfile}
//       options={{
//         tabBarLabel: 'Tài khoản',
//         tabBarIcon: ({color, size}) => (
//           <MaterialCommunityIcons
//             style={{padding: scale(6)}}
//             name="auto-fix"
//             color="#1e90ff"
//             size={size * 1}
//           />
//         ),
//       }}
//     />
//   </Tab.Navigator>;
// };
// export default class Router extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Tab.Navigator screenOptions={{header: 'Home'}}>
//           <Tab.Screen name="Login" component={Home} />
//           <Tab.Screen name="Taikhoan" component={Search} />
//           <Tab.Screen name="EditProfile" component={UpdateProfile} />
//           {/* <Tab.Screen name="Bottom" component={Bottom} /> */}
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

function Router() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UpdateProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;