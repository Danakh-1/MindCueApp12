import React from 'react';
import {Text, View, SafeAreaView, ImageBackground, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import useApi from '../../hooks/api';
import {AuthContext} from '../../contexts/authContext';
import style from '../../components/style';

// The page that allows the user to use a pin code to verify the account creation
function UserVerification({navigation}) {
  const [number, setNumber] = React.useState('');
  const {post} = useApi();
  const {userData} = React.useContext(AuthContext);
  // This function limits the user to using only numbers
  function onChanged(text) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        alert('Please enter numbers only');
      }
    }
    setNumber(newText);
  }

  // const handleVerify = async () => {
  //   try {
  //     const data = {
  //       email: userData?.email,
  //       otp: number,
  //     };
  //     const res = await post('users/verifyEmail', data);
  //     console.log("response", res)
  //     if (response?.status === 200) {
  //             const { userId, email, token } = response?.data;
  //             setaccessToken(token);
  //               setuserData({ userId, email });
  //               await AsyncStorage.setItem('@token', token);
  //               await AsyncStorage.setItem('@userData', JSON.stringify({ userId, email }));
      
  //                // Directly navigate to HomeScreen after signup
  //                navigation.navigate('HomeScreen');
  //           } else {
  //             // Handle signup failure
  //             Alert.alert('Error', 'Signup failed. Please try again.');
  //           }
  //     // if (res.status == 200) {
  //     //   navigation.navigate('HomeScreen');
  //     // } else {
  //     //   Alert.alert('Error', 'Invalid OTP');
  //     // }
  //   } catch (error) {
  //     Alert.alert('Error', error?.message | error);
  //   }
  // };

  return (
    <SafeAreaView>
      <ImageBackground
        style={style.bgGraphic13}
        source={require('../../assets/images/Ellipse10.png')}
      />
      <ImageBackground
        source={require('../../assets/images/Rectangle24.png')}
        style={style.bgImage3}
      />
      <ImageBackground
        source={require('../../assets/images/Ellipse5.png')}
        style={style.bgGraphic11}
      />
      <ImageBackground
        style={style.bgGraphic12}
        source={require('../../assets/images/Ellipse7.png')}
      />
      <ImageBackground
        style={style.bgGraphic14}
        source={require('../../assets/images/Ellipse8.png')}
      />
      <View style={style.box4}>
        <View>
          <Text style={style.userTitle}>Hello User!</Text>
          <Text style={style.generalText3}>
            Please enter verification code:
          </Text>
          <TextInput
            style={style.numberInput}
            keyboardType="numeric"
            onChangeText={text => onChanged(text)}
            value={number}
            maxLength={4}
          />
          <Text style={style.generalText3}> 
            Didn't receive code?{' '}
            <Text style={style.generalText2}>Send again</Text>
          </Text>
          <Text style={style.button3} onPress={() => navigation.navigate("UserNav")}>
            Next
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default UserVerification;