import React, { useContext } from 'react';
import {Text, View, SafeAreaView, ImageBackground} from 'react-native';
import style from '../../components/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../contexts/authContext';

const HomeScreen=({navigation}) =>{// 
  const {userData}=useContext(AuthContext);
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={style.userCircle}
          source={require('../../assets/images/Ellipse15.png')}
        />
        <Text style={style.userGreet}>Hello User!</Text>
        <Text style={style.userGreet2}>Hope you feel great today</Text>
        <View style={style.dashboard}>
          <Text style={style.dashboardTitle}>DashBoard</Text>
          <View style={style.dashboardContainer}>
            <Text
              style={style.dashboardOptions}
              onPress={() => navigation.navigate('TriggerScreen')}>
              List of triggers
            </Text>
            <Icon
              name="arrow-right"
              size={20}
              color="#638184"
              style={{position: 'absolute', marginLeft: 183, top: 4}}
              onPress={() => navigation.navigate('TriggerScreen')}
            />
          </View>
          <View style={style.dashboardContainer}>
            <Text
              style={style.dashboardOptions}
              onPress={() => navigation.navigate('ReportScreen')}>
              Report
            </Text>
            <Icon
              name="arrow-right"
              size={20}
              color="#638184"
              style={{position: 'absolute', marginLeft: 183, top: 4}}
              onPress={() => navigation.navigate('ReportScreen')}
            />
          </View>
          {/* <View style={style.dashboardContainer}>
                <Text style={style.dashboardOptions} onPress={() => navigation.navigate('QRScreen')}>QR code</Text>
                <Icon name='arrow-right' size={20} color='#638184' style={{position: 'absolute', marginLeft: 183, top: 4}} onPress={() => navigation.navigate('QRScreen')}/>
                </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
