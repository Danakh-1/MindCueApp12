import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ChatScreen, HomeScreen, LogScreen, ProfileScreen} from '../../screens';

// create variables for each tab in the navbar
const homePage = 'Home';
const logsPage = 'Logs';
const chatPage = 'Chats';
const profilePage = 'Profile';

// create the navbar using this imported method
const Tab = createBottomTabNavigator();

// this is where we add our screens to the navbar
const UserNav = () => {
  return (
    <Tab.Navigator
      initialRouteName={homePage}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === homePage) {
            iconName = focused ? 'home' : 'home';
          } else if (rn === chatPage) {
            iconName = focused ? 'chat' : 'chat';
          } else if (rn === logsPage) {
            iconName = focused ? 'history' : 'history';
          } else if (rn === profilePage) {
            iconName = focused ? 'account' : 'account';
          }

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              size={35}
              color={'#DC989A'}
              selectionColor={'#638184'}
            />
          );
        },
      })}>
      <Tab.Screen name={homePage} component={HomeScreen}/>
      <Tab.Screen name={chatPage} component={ChatScreen} />
      <Tab.Screen name={logsPage} component={LogScreen} />
      <Tab.Screen name={profilePage} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default UserNav;