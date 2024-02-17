import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DoctorContacts, DoctorHome, DoctorProfile} from '../../screens';

// create variables for each tab in the navbar
const DH = 'Home';
const DP = 'Profile';
const DC = 'Contacts';

// create the navbar using this imported method
const Tab = createBottomTabNavigator();

// this is where we add our screens to the navbar
const DoctorNav = () => {
  return (
    <Tab.Navigator
      initialRouteName={DoctorHome}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === DH) {
            iconName = focused ? 'home' : 'home';
          } else if (rn === DP) {
            iconName = focused ? 'account' : 'account';
          } else if (rn === DC) {
            iconName = focused ? 'chat' : 'chat';
          }

          // } else if (rn === profilePage) {
          //     iconName = focused ? 'account' : 'account';
          //   }

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
      <Tab.Screen name={DH} component={DoctorHome} />
      <Tab.Screen name={DC} component={DoctorContacts} />
      <Tab.Screen name={DP} component={DoctorProfile} />
    </Tab.Navigator>
  );
};

export default DoctorNav;