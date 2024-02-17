import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import style from '../../components/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useApi from '../../hooks/api';
import {ScrollView, TouchableOpacity} from 'react-native';

function DoctorEdit({navigation}) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [clincNo, setClincNo] = useState(null);
  const {get, patch} = useApi();

  useEffect(() => {
    getUserDetail();
  }, []);
 
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
  const removeNullKeys = (inputObject) => {
    // Filter out entries with null values
    const filteredEntries = Object.entries(inputObject).filter(
      ([key, value]) => value !== null
    );
  
    // Reconstruct object without null keys
    const resultObject = Object.fromEntries(filteredEntries);
  
    return resultObject;
  };
  const saveDetail= async()=>{
    const token=await AsyncStorage.getItem('@token')
    try {
      
    const config=removeNullKeys({
      name,
      email,
      phone,
      password,
      clincAdd: address,
      clincNo:phone,
    })
    await patch('users/updateUser/', config,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    Alert.alert('Data Updated Successfully');

  } catch (error) {
      console.log(error)
  }

  }
  return (
    <SafeAreaView>
      <View style={style.generalBox}>
        <Text style={style.triggersTitle}>Profile</Text>
        <ScrollView>
          <View style={style.generalBox2}>
            <Text style={style.generalText}>Name</Text>
            <TextInput
              style={style.userEditInput}
              activeUnderlineColor="#DC989A"
              underlineColor="transparent"
              placeholder="Name"
              value={name}
              onChangeText={val => setName(val)}></TextInput>
            <Text style={style.generalText}>Email</Text>
            <TextInput
              style={style.userEditInput}
              activeUnderlineColor="#DC989A"
              underlineColor="transparent"
              placeholder="Email"
              value={email}
              onChangeText={val => setEmail(val)}></TextInput>
            <Text style={style.generalText}>Phone</Text>
            <TextInput
              style={style.userEditInput}
              activeUnderlineColor="#DC989A"
              underlineColor="transparent"
              placeholder="Phone Number"
              value={phone}
              onChangeText={val => setPhone(val)}></TextInput>
            <Text style={style.generalText}>Password</Text>
            <TextInput
              style={style.userEditInput}
              activeUnderlineColor="#DC989A"
              underlineColor="transparent"
              placeholder="password"
              value={password}
              onChangeText={val => setPassword(val)}></TextInput>
            <Text style={style.generalText}>Clinic Information</Text>
            <Text style={style.generalText}>Phone Number</Text>
            <TextInput
              style={style.userEditInput}
              activeUnderlineColor="#DC989A"
              underlineColor="transparent"
              placeholder="Phone number"
              value={clincNo}
              onChangeText={val => setClincNo(val)}></TextInput>
            <Text style={style.generalText}>Address</Text>
            <TextInput
              style={style.userEditInput}
              activeUnderlineColor="#DC989A"
              underlineColor="transparent"
              placeholder="address"
              value={address}
              onChangeText={val => setAddress(val)}></TextInput>
          </View>
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity style={style.editButton} onPress={saveDetail}>
          <Text style={style.userEdit}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default DoctorEdit;
