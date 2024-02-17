import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageProps,
  TouchableOpacity,
} from 'react-native';
import style from '../../components/style';
import {AuthContext} from '../../contexts/authContext';
import React, {useContext, useEffect, useState} from 'react';
import useApi from '../../hooks/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

function DoctorProfile({navigation}) {
  const {setaccessToken, setuserData} = useContext(AuthContext);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [clincNo, setClincNo] = useState(null);
  const {get, patch} = useApi();

 

  useFocusEffect(
    React.useCallback(() => {
      getUserDetail();
    }, []),
  );
  const getUserDetail = async () => {
    const data = await AsyncStorage.getItem('@userData');
    const userData = JSON.parse(data);
    if (userData.email) {
      try {
        const response = await get(`/users/${userData.email}`);
        const user = response.data;
        setName(user?.name);
        setEmail(user?.email);
        setPhone(user?.phone);
        setAddress(user?.clincAdd);
        setClincNo(user?.clincNo);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleLogout=()=>{
    setaccessToken('')
    setuserData({
    name:'',
    email:'',
    token: '',
    userId: '',
    userType: []
    })

  }
  return (
    <SafeAreaView>
      <View style={style.profileContainer1}>
        <Image source={require('../../assets/images/User4.png')}></Image>
        <Text style={style.userName}>{name}</Text>
        <Text style={style.userEmail}>{email}</Text>
        <Text style={style.userInfo}>Clinic Info</Text>
        <View style={style.profileContainer2}>
          <Text style={style.userInfo}>Phone:</Text>
          <Text style={style.userECInfo}>{phone}</Text>
          <Text style={style.userInfo}>Address:</Text>
          <Text style={style.userECInfo}>{address}</Text>
        </View>
        <Text
          style={style.userEdit}
          onPress={() => navigation.navigate('DoctorEdit')}>
          Edit
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={style.logoutButton}
          onPress={handleLogout}>
          <Text style={style.userEdit1}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default DoctorProfile;
