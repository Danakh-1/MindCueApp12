import React, {useContext} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../../components/style';
import useApi from '../../hooks/api';
import {AuthContext} from '../../contexts/authContext';

// This is the screen where the user signs in
function SignInScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const {post} = useApi();
  const {setaccessToken, setuserData} = useContext(AuthContext);

  const onLogin = async () => {
    try {
      let data = {
        email: email,
        password: password,
      };
      const res = await post('users/login', data);
      if (res?.data?.token) {
        setaccessToken(res?.data?.token);
        setuserData(res?.data);

        await AsyncStorage.setItem('@token', res?.data?.token);
        const sData = JSON.stringify(res?.data);
        await AsyncStorage.setItem('@userData', sData);
      }
    } catch (e) {
      console.log(e.message);
      console.log('err', e);
      alert(e.message);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={style.bgGraphic2}
          source={require('../../assets/images/Ellipse7.png')}
        />
        <ImageBackground
          style={style.bgGraphic3}
          source={require('../../assets/images/Rectangle1.png')}
        />
        <ImageBackground
          source={require('../../assets/images/Ellipse2.png')}
          style={style.bgImage}
        />
        <ImageBackground
          style={style.bgGraphic4}
          source={require('../../assets/images/Rectangle2.png')}
        />
        <ImageBackground
          style={style.bgGraphic1}
          source={require('../../assets/images/Ellipse5.png')}
        />
        <ImageBackground
          style={style.bgGraphic5}
          source={require('../../assets/images/Ellipse6.png')}
        />
        <ImageBackground
          style={style.bgGraphic6}
          source={require('../../assets/images/Ellipse8.png')}
        />

        <Text style={style.signInTitle}>Sign In</Text>
        <View style={style.box1}>
          <TextInput
            style={style.textbox}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={style.textbox}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={onLogin}>
            {loading ? (
              <ActivityIndicator size="large" color="#222" />
            ) : (
              <Text style={style.button1}>Sign In</Text>
            )}
          </TouchableOpacity>
        </View>
        <Text style={style.signInText}>Forgot Password?</Text>
        <Text
          style={style.signInText}
          onPress={() => navigation.navigate('SignUpScreen')}>
          New? Create account
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SignInScreen;
