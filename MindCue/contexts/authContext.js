import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = new createContext();

export const AuthProvider = ({children}) => {
  const [userData, setuserData] = useState({
    name:'',
    email:'',
    token: '',
    userId: '',
    userType: []
  });
  const [accessToken, setaccessToken] = useState('');

  useEffect(() => {
    // getUser();
  }, []);

  const getUser = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      if (token) {
        setaccessToken(token);
      }

      const data = await AsyncStorage.getItem('@userData');
      if (data) {
        const pData = JSON.parse(data);
        setuserData(pData);
      }
    } catch (error) {
      console.log('Auth Context ==>>>', error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        userData,
        setuserData,
        accessToken,
        setaccessToken,
        // getUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};