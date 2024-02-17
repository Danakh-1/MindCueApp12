import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../../contexts/authContext';

import UserNav from '../user/user.routes';
import DoctorNav from '../doctor/doctor.routes';
import {
  AddPatient,
  DoctorChat,
  DoctorChatScreen,
  DoctorEdit,
  EditScreen,
  Patient,
  ReportScreen,
  ScreenTimeScreen,
  TriggerScreen,
  UserVerification, 
  DoctorVerification,
  ProfileScreen
} from '../../screens';

const {Navigator, Screen} = createNativeStackNavigator();
const MainNav = () => {
  const {userData} = useContext(AuthContext);
  console.log(" user data 0000000000",userData);// userData is our login api response, 
  if(userData?.userType[0]){
    return (
      <Navigator
        initialRouteName={
          // 'UserNav'
          userData?.userType[0]? (userData.userType[0] === 'patient' ? 'UserNav' : 'DoctorNav') : ('DoctorNav')// chage will be there, its a condition if user type is patinet then move to user, if doctor or other move to doctor nav 
        }
        screenOptions={{headerShown: false}}>
        <Screen
          name="UserNav"
          component={UserNav}
          options={{headerShown: false}}
        />
        <Screen
        
          name="TriggerScreen"
          component={TriggerScreen}
          options={{
            headerShown:true,
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              color: '#638184',
            },
            headerTintColor: '#DC989A',
            headerShadowVisible: false,
          }}
        />
        
        <Screen
          name="ReportScreen"
          component={ReportScreen}
          options={{
            headerShown:true,
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              color: '#638184',
            },
            headerTintColor: '#DC989A',
            headerShadowVisible: false,
          }}
        />
        <Screen
          name="ScreenTimeScreen"
          component={ScreenTimeScreen}
          options={{
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              color: '#638184',
            },
            headerTintColor: '#DC989A',
            headerShadowVisible: false,
          }}
        />
        <Screen
          name="EditScreen"
          component={EditScreen}
          options={{
            headerShown:true,
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              color: '#638184',
            },
            headerTintColor: '#DC989A',
            headerShadowVisible: false,
          }}
        />
        <Screen
          name="DoctorChat"
          component={DoctorChat}
          options={{
            headerShown:true,
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              color: '#638184',
            },
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
        />
  
        {/* ------------------------------Doctor---------------------------------- */}
  
        <Screen
          name="DoctorNav"
          component={DoctorNav}
          options={{headerShown: false}}
        />
        <Screen
          name="DoctorEdit"
          component={DoctorEdit}
          options={{
            headerShown:true,
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              color: '#638184',
            },
            headerTintColor: '#DC989A',
            headerShadowVisible: false,
          }}
        />
        <Screen
          name="DoctorChatScreen"
          component={DoctorChatScreen}
          options={{
            headerShown:true,
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              color: '#638184',
            },
            headerTintColor: '#DC989A',
            headerShadowVisible: false,
          }}
        />
        <Screen
          name="Patient"
          component={Patient}
          options={{
            headerShown:true,
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              color: '#638184',
            },
            headerTintColor: '#DC989A',
            headerShadowVisible: false,
          }}
        />
        <Screen
          name="AddPatient"
          component={AddPatient}
          options={{
            headerShown:true,
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerTitleStyle: {
              fontFamily: 'Poppins-SemiBold',
              color: '#638184',
            },
            headerTintColor: '#DC989A',
            headerShadowVisible: false,
          }}
        />
        <Screen
          name="DoctorVerification"
          component={DoctorVerification}
          options={{
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerTitleStyle: {fontFamily: 'Poppins-SemiBold', color: '#638184'},
            headerTintColor: '#DC989A',
            headerShadowVisible: false,
          }}
        />
      </Navigator>
    );
  }
  
};

export default MainNav;