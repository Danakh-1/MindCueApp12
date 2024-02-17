import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DoctorVerification,
  HomeScreen,
  SignInScreen,
  SignUpScreen,
  UserVerification,
} from '../../screens';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthNav = () => {
  return (
    
    <Navigator
      initialRouteName={'SignInScreen'}
      screenOptions={{headerShown: false}}>
      <Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerStyle: {backgroundColor: '#f2f2f2'},
          headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'},
          headerTintColor: '#DC989A',
          headerShadowVisible: false,
        }}
      />
      <Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerStyle: {backgroundColor: '#f2f2f2'},
          headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'},
          headerTintColor: '#DC989A',
          headerShadowVisible: false,
        }}
      />
      {/* <Screen
        name="DoctorVerification"
        component={DoctorVerification}
        options={{
          headerStyle: {backgroundColor: '#f2f2f2'},
          headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'},
          headerTintColor: '#DC989A',
          headerShadowVisible: false,
        }}
      />
      <Screen
        name="UserVerification"
        component={UserVerification}
        options={{
          headerStyle: {backgroundColor: '#f2f2f2'},
          headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'},
          headerTintColor: '#DC989A',
          headerShadowVisible: false,
        }}
      /> */}
    </Navigator>
  );
};

export default AuthNav;