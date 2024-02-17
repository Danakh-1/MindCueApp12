import React, {useContext, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Button,
  ImageBackground,
  Pressable,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {TextInput, RadioButton} from 'react-native-paper';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import style from '../../components/style';

import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import useApi from '../../hooks/api';
import {BASEURL} from '../../IP';
import {AuthContext} from '../../contexts/authContext';
import {color} from 'react-native-elements/dist/helpers';

// This is the screen where the user registers a new account
function SignUpScreen({navigation}) {
  const [checked, setChecked] = React.useState('first');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isDoctor, setIsDoctor] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const {post} = useApi();
  const {setaccessToken, setuserData} = useContext(AuthContext);

  // const handleSignUp = async () => {
  //   try {
  //     // Email validation regex
  //     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  //     if (!name || !email || !password || !confirmPassword) {
  //       Alert.alert('Error', 'Please fill in all fields.');
  //     } else if (!emailRegex.test(email)) {
  //       Alert.alert('Error', 'Please enter a valid email address.');
  //     } else if (password.length < 5) {
  //       Alert.alert('Error', 'Password must be at least 5 characters long.');
  //     } else if (password !== confirmPassword) {
  //       Alert.alert('Error', 'Passwords do not match.');
  //     } else {
  //       setLoading(true);
  //       let data = {
  //         name: name,
  //         email: email,
  //         password: password,
  //         licenceID: true,
  //         validated: true,
  //       };
  //       // set auth token for other protected apis

  //       // const res = await post('users/signup', data);
  //       // console.log('====================================');
  //       // console.log({res});
  //       // console.log('====================================');

  //       // if (res?.data?.token) {
  //       //   setaccessToken(res?.data?.token);
  //       //   setuserData(res?.data);
  //       //   await AsyncStorage.setItem('@token', res?.data?.token);
  //       //   const sData = JSON.stringify(res?.data);
  //       //   await AsyncStorage.setItem('@userData', sData);
  //       //   // isDoctor
  //       //   //   ? navigation.navigate('DoctorHome')
  //       //   //   : navigation.navigate('HomeScreen');

  //       //   navigation.navigate('UserVerification');
  //       // }
  //       // setLoading(false);

  //       axios.post(`users/signup`, data)
  //         .then(res => {
  //           console.log("Responseee", res)
  //           if (res?.data?.token) {
  //             // set auth token for other protected apis
  //             setAuthToken(res?.data?.token);
  //             setaccessToken(res?.data?.token);
  //         setuserData(res?.data);
  //         AsyncStorage.setItem('@token', res?.data?.token);
  //         const sData = JSON.stringify(res?.data);
  //         AsyncStorage.setItem('@userData', sData);
  //             // change the navigation where user should go after signup
  //             isDoctor
  //               ? navigation.navigate('DoctorVerification')
  //               : navigation.navigate('UserVerification');
  //           }
  //           setLoading(false);
  //         })
  //         .catch(e => {

  //         });

  //       // Perform sign-up logic here
  //       // If successful, navigate to the next screen

  //       // if (checked === 'third') {
  //       //   navigation.navigate('DoctorVerification');
  //       // } else {
  //       //   navigation.navigate('UserVerification');
  //       // }
  //     }
  //   } catch (e) {
  //     console.log(e.message);
  //     console.log(e);
  //     alert(e.message);
  //     setLoading(false);
  //   }
  // };


  const handleSignUp = async () => {
    try {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

      if (!name || !email || !password || !confirmPassword) {
        Alert.alert('Error', 'Please fill in all fields.');
      } else if (!emailRegex.test(email)) {
        Alert.alert('Error', 'Please enter a valid email address.');
      } else if (password.length < 5) {
        Alert.alert('Error', 'Password must be at least 5 characters long.');
      } else if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match.');
      } else {
        setLoading(true);
        const data = {
          name,
          email,
          password,
          userType: isDoctor ? 'doctor' : 'patient',
          validated: true, // Considering no need for email verification
          licenceID: true,
        };
   
        // Make the API call to your signup endpoint
        const response = await post('users/signup', data);
        if (response?.status === 201) {
          const {userId, email, token, userType} = response?.data;
          setaccessToken(token);
          setuserData({userId, email, userType});
          await AsyncStorage.setItem('@token', token);
          await AsyncStorage.setItem(
            '@userData',
            JSON.stringify({userId, email}),
          );

          // Directly navigate to Userverification or doctor verificatio screen after signup
          isDoctor
            ? navigation.navigate('DoctorVerification')
            : navigation.navigate('UserVerification');

          if (checked === 'third') {
            navigation.navigate('DoctorVerification');
          } else {
            navigation.navigate('UserVerification');
          }
        } else {
          // Handle signup failure
          Alert.alert('Error', 'Signup failed. Please try again.');
        }

        setLoading(false);
      }
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert('Error', 'Signup failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={style.bgGraphic9}
          source={require('../../assets/images/Ellipse10.png')}
        />
        <ImageBackground
          source={require('../../assets/images/Rectangle23.png')}
          style={style.bgImage2}
        />
        <ImageBackground
          source={require('../../assets/images/Ellipse5.png')}
          style={style.bgGraphic7}
        />
        <ImageBackground
          style={style.bgGraphic8}
          source={require('../../assets/images/Ellipse7.png')}
        />
        <ImageBackground
          style={style.bgGraphic10}
          source={require('../../assets/images/Ellipse8.png')}
        />
        <Text style={style.registerTitle}>Create Account</Text>
        <View style={style.box2}>
          <TextInput
            style={style.textbox}
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />

          <TextInput
            style={style.textbox}
            placeholder="Email Address"
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            secureTextEntry={true}
            style={style.textbox}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />

          <TextInput
            style={style.textbox}
            secureTextEntry={true}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />

          <Text style={style.userQues}>What kind of user are you?</Text>
          <View style={style.box3}>
            <View style={style.userTypeContainer}>
              <RadioButton
                color="#DC989A"
                uncheckedColor="#638184"
                value="I am a patient with a doctor"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => {setChecked('first'); setIsDoctor(false)}}
              />
              <Text>I am a patient with a doctor</Text>
            </View>
            <View style={style.userTypeContainer}>
              <RadioButton
                color="#DC989A"
                uncheckedColor="#638184"
                value="I do not currently see a doctor"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => {setChecked('second'); setIsDoctor(false)}}
              />
              <Text>I do not currently see a doctor</Text>
            </View>
            <View style={style.userTypeContainer}>
              <RadioButton
                color="#DC989A"
                uncheckedColor="#638184"
                value={'I am a licensed mental health professional'}
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('third');
                  setIsDoctor(true);
                }}
              />
              <Text>I am a licensed mental health professional</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleSignUp}>
            {loading ? (
              <ActivityIndicator size="large" color="#222" />
            ) : (
              <Text style={style.button2}>Sign up</Text>
            )}
          </TouchableOpacity>
          <View>
            <Text
              onPress={() => navigation.navigate('SignInScreen')}
              style={style.userEdit1}>
              Already have account<Text styles={{color: 'black'}}>?</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignUpScreen;
