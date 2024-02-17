import {SafeAreaView, View, Text, Button, ImageBackground, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import style from '../../components/style';
import useApi from '../../hooks/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity,ScrollView } from 'react-native';
import axios from 'axios';

function EditScreen({navigation}) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [emgName, setEmgName] = useState(null);
  const [emgPhone, setEmgPhone] = useState(null);
  const [relationship, setRelationship] = useState(null);
  const {get,patch} = useApi();

  useEffect(() => {
    getUserDetail();
  }, []);
 
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
      setPhone(user?.phone);
      setEmgName(user?.EMGName);
      setEmgPhone(user?.EMGphone);
      setRelationship(user?.EMGRelationship);

    } catch (error) {
        console.log(error)
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
  const editDetail= async()=>{
    const token=await AsyncStorage.getItem('@token')
    try {
      
    const config=removeNullKeys({
      name,
      email,
      phone,
      password,
      EMGName:emgName,
      EMGphone:emgPhone,
      EMGRelationship:relationship
    })
    const response= await patch('users/updateUser/', config,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response)
    Alert.alert('Data Updated Successfully');



  } catch (error) {
      console.log(error)
  }

  }
  return (
    <SafeAreaView style={style.generalBoxEdit}>
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
            onChangeText={value => setName(value)}></TextInput>
          <Text style={style.generalText}>Email</Text>
          <TextInput
            style={style.userEditInput}
            activeUnderlineColor="#DC989A"
            underlineColor="transparent"
            placeholder="Email"
            value={email}
            onChangeText={value => setEmail(value)}></TextInput>
          <Text style={style.generalText}>Phone</Text>
          <TextInput
            style={style.userEditInput}
            activeUnderlineColor="#DC989A"
            underlineColor="transparent"
            placeholder="Phone Number"
            value={phone}
            onChangeText={value => setPhone(value)}></TextInput>
          <Text style={style.generalText}>Password</Text>
          <TextInput
            style={style.userEditInput}
            activeUnderlineColor="#DC989A"
            underlineColor="transparent"
            placeholder="Password"
            value={password}
            onChangeText={value => setPassword(value)}></TextInput>
          <Text style={style.generalText}>Emergency Contact Information</Text>
          <Text style={style.generalText}>Name</Text>
          <TextInput
            style={style.userEditInput}
            activeUnderlineColor="#DC989A"
            underlineColor="transparent"
            placeholder="Name"
            value={emgName}
            onChangeText={value => setEmgName(value)}></TextInput>
          <Text style={style.generalText}>Phone Number</Text>
          <TextInput
            style={style.userEditInput}
            activeUnderlineColor="#DC989A"
            underlineColor="transparent"
            placeholder="Phone Number"
            value={emgPhone}
            onChangeText={value => setEmgPhone(value)}></TextInput>
          <Text style={style.generalText}>Relationship</Text>
          <TextInput
            style={style.userEditInput}
            activeUnderlineColor="#DC989A"
            underlineColor="transparent"
            placeholder="Relationship"
            value={relationship}
            onChangeText={value => setRelationship(value)}></TextInput>
        </View>
        </ScrollView>
        
      </View>
      <View>
          <TouchableOpacity
            style={style.editButton}
            onPress={editDetail}
            >
            <Text style={style.userEdit}>Save</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

export default EditScreen;
