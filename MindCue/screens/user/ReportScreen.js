import { SafeAreaView, View, Text, TouchableOpacity, Button, ImageBackground, Platform } from 'react-native';
import { RadioButton } from 'react-native-paper';
import React from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import { downloadFile, getDownloadPermissionAndroid} from '../../components/fileFunction';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from '../../components/style';

function ReportScreen({ navigation }) {
    const fileUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    const [checked, setChecked] = React.useState('first');
    return (
        <SafeAreaView>
            <ImageBackground source={require('../../assets/images/Rectangle22.png')} style={style.bgGraphic15}/>
            <ImageBackground source={require('../../assets/images/Rectangle33.png')} style={style.bgGraphic16}/>
            <View style={style.generalBox}>
                <Text style={style.triggersTitle}>Report Generator</Text>
                <View style={style.radiobuttonContainer}>
                <RadioButton color='#DC989A' uncheckedColor= '#638184' value='Weekly' status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} />
                <Text style={{color: '#638184'}}>Weekly</Text>
                </View>
                <View style={style.radiobuttonContainer}>
                <RadioButton color='#DC989A' uncheckedColor= '#638184' value='Bimonthly' status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')} />
                <Text style={{color: '#638184'}}>Bimonthly</Text>
                </View >
                <View style={style.radiobuttonContainer}>
                <RadioButton color='#DC989A' uncheckedColor= '#638184' value='Monthly' status={checked === 'third' ? 'checked' : 'unchecked'} onPress={() => setChecked('third')} />
                <Text style={{color: '#638184'}}>Monthly</Text>
                </View>
                <TouchableOpacity
                onPress={() => {
                if (Platform.OS === 'android') {
                    getDownloadPermissionAndroid().then(granted => {
                if (granted) {
                    downloadFile(fileUrl);
                }
                });
            }  else {
                    downloadFile(fileUrl).then(res => {
                        RNFetchBlob.ios.previewDocument(res.path());
            });
          }
        }}>
            <Text style={style.button1}>Download report</Text>
      </TouchableOpacity>
            </View>
        </SafeAreaView>
        );
}

export default ReportScreen;