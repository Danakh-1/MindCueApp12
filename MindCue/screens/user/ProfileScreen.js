import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageProps,
  TouchableOpacity,
} from 'react-native';
import style from '../../components/style';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useApi from '../../hooks/api';
import {useFocusEffect} from '@react-navigation/native';

function ProfileScreen({navigation}) {
  const {setaccessToken,setuserData} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('96622338');
  const [emgName, setEmgName] = useState('');
  const [emgPhone, setEmgPhone] = useState('');
  const [relationship, setRelationship] = useState('');
  const {get} = useApi();
  useFocusEffect(React.useCallback(() => {
      getUserDetail()
  }, []));

  const getUserDetail = async () => {
    const data = await AsyncStorage.getItem('@userData');
    const userData = JSON.parse(data);
    if (userData.email) {
      try {
        const response = await get(`/users/${userData.email}`);
        console.log(response.data.name);
        const user = response.data;
        setName(user?.name);
        setEmail(user?.email);
        setPhone("96622338");
        setEmgName(user?.EMGName);
        setEmgPhone(user?.EMGphone);
        setRelationship(user?.EMGRelationship);
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
    <SafeAreaView style={style.safeArea1}>
      <View style={style.profileContainer1}>
        <Image source={require('../../assets/images/User4.png')}></Image>
        <Text style={style.userName}>{name}</Text>
        <Text style={style.userEmail}>{email}</Text>
        <Text style={style.userInfo}>User Info</Text>
        <View style={style.profileContainer2}>
          <Text style={style.userInfo}>
          Phone: <Text style={style.userECInfo}>{phone}</Text>
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              width: '100%',
              fontSize: 15,
              color: '#638184',
            }}>
            Emergency Contact Info
          </Text>
          <Text style={style.userInfo}>
           Name: 
           </Text>
    <Text style={style.userECInfo}>{emgName}</Text>

          <Text style={style.userInfo}> Phone:</Text>
          <Text style={style.userECInfo}>{emgPhone}</Text>
          <Text style={style.userInfo}>
            
            Relationship:         </Text><Text style={style.userECInfo}>{relationship}</Text>
 
        </View>
        <Text
          style={style.userEdit}
          onPress={() => navigation.navigate('EditScreen')}>
          Edit
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={style.logoutButton}
          onPress={handleLogout}>
          <Text style={style.userEdit}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;
