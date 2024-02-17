import React from 'react';
import {SafeAreaView, View, Text, ImageBackground} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import style from '../../components/style';

const QRScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/images/Rectangle22.png')}
        style={style.bgGraphic15}
      />
      <ImageBackground
        source={require('../../assets/images/Rectangle33.png')}
        style={style.bgGraphic16}
      />
      <View style={style.QRContainer}>
        <Text style={style.triggersTitle}>Scan the Code</Text>
        <QRCode size={200} />
      </View>
    </SafeAreaView>
  );
};

export default QRScreen;
