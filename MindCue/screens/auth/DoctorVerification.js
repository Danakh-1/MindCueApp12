import React from 'react';
import {Text, View, SafeAreaView, ImageBackground} from 'react-native';
import {TextInput} from 'react-native-paper';
import style from '../../components/style';

// The page that allows the user to use a pin code to verify the account creation
function DoctorVerification({navigation}) {
  const [number, setNumber] = React.useState('');
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

  return (
    <SafeAreaView>
      <ImageBackground
        style={style.bgGraphic13}
        source={require('../../assets/images/Ellipse10.png')}
      />
      <ImageBackground
        source={require('../../assets/images/Rectangle24.png')}
        style={style.bgImage4}
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

      <View style={style.box5}>
        <View>
          <Text style={style.userTitle}>Hello Doctor!</Text>
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
            <Text style={style.generalText2}>Send again.</Text>
          </Text>
          <Text style={style.generalText3}>Please enter license ID:</Text>
          <TextInput
            style={style.numberInput1}
            keyboardType="numeric"
            // onChangeText={text1 => onChanged(text1)}
            // value={number}
            maxLength={12}
          />
          <Text
            style={style.button3}
            onPress={() => navigation.navigate('DoctorNav')}>
            Next
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DoctorVerification;
