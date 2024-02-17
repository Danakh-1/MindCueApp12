import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from './auth/auth.routes';
import MainNav from './main/main.routes';
import {AuthContext} from '../contexts/authContext';

//-----------------------------------------
const Routes = () => {
  const {accessToken} = useContext(AuthContext);
  return (
    <NavigationContainer >
      {accessToken ? <MainNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default Routes;