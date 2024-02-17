import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageProps,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../../components/style';

function Patient({navigation}) {
  let phoneNum = 96622338;
  return (
    <SafeAreaView>
      <View style={style.profileContainer3}>
        <Image source={require('../../assets/images/User5.png')}></Image>
        <Text style={style.userName}>Latifah Aldhaferi</Text>
        <View style={style.profileContainer4}>
          <Text style={style.generalText2}>Mobile</Text>
          <Text style={style.generalText}>60420309</Text>
          <Text style={style.generalText2}>Email</Text>
          <Text style={style.generalText}>Latifahaldhafirii@hotmail.com</Text>
        </View>
        <Text
          style={style.button4}
          onPress={() => navigation.navigate('DoctorChatScreen')}>
          Send a Chat
        </Text>
        <Text></Text>
        <View style={style.button5}>
          <Icon name="phone" size={16} color={'#DC989A'} />
          <Text
            style={{
              color: '#DC989A',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
            }}
            onPress={() => Linking.openURL(`tel:${phoneNum}`)}>
            Call Emergency Contact
          </Text>
        </View>
        <View style={style.ECcontainer}>
          <Text
            style={{color: '#638184', fontFamily: 'Lexend-Bold', fontSize: 14}}>
            Name:
          </Text>
          <Text
            style={{
              color: '#638184',
              fontFamily: 'Lexend-Regular',
              fontSize: 14,
            }}>
            Haifa
          </Text>
        </View>
        <View style={style.ECcontainer}>
          <Text
            style={{color: '#638184', fontFamily: 'Lexend-Bold', fontSize: 14}}>
            Phone:
          </Text>
          <Text
            style={{
              color: '#638184',
              fontFamily: 'Lexend-Regular',
              fontSize: 14,
            }}>
            {phoneNum}
          </Text>
        </View>
        <View style={style.ECcontainer}>
          <Text
            style={{color: '#638184', fontFamily: 'Lexend-Bold', fontSize: 14}}>
            Relationship:
          </Text>
          <Text
            style={{
              color: '#638184',
              fontFamily: 'Lexend-Regular',
              fontSize: 14,
            }}>
            Mother
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Patient;
