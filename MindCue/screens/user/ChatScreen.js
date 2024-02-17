import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import style from '../../components/style';

function ChatScreen({navigation}) {
  return (
    <SafeAreaView>
      {/* <View style={style.headerContainer}>
                <Image style={style.doctorImage} source={require('../../assets/images/doctor.jpg')} />
                <Text style={style.doctorTitle}>Dr. Mohammad</Text>
            </View> */}
      <View>
        <Image
          style={style.chatborder1}
          source={require('../../assets/images/Rectangle44.png')}
        />
        <Image
          style={style.chatborder2}
          source={require('../../assets/images/Rectangle55.png')}
        />
        <Text style={style.chats}>Active Chats</Text>
        <View style={style.doctorContainer}>
          <Image source={require('../../assets/images/User3.png')} />
          <Text
            style={style.doctorTitle}
            onPress={() => navigation.navigate('DoctorChat')}>
            Dr. Mohammad
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ChatScreen;
