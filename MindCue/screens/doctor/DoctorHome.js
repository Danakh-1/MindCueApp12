import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import style from '../../components/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {camelCase} from 'react-native-svg/lib/typescript/xml';

function DoctorHome({navigation}) {
  // const devices = Camera.getAvailableCameraDevices()
  // const device = devices.find((d) => d.position === 'back')
  // const camera = useRef(null)
  const [imageData, setImageData] = useState('');
  const [takePhotoClicked, setTakePhotoClicked] = useState(false);

  //   useEffect(()=>{
  //     checkPeermission()
  //   },[])
  //   const checkPeermission =async()=>{
  //     const newcameraPermission = await Camera.requestCameraPermission()
  //     const newmicrophonePermission = await Camera.requestMicrophonePermission()
  //     console.log(newcameraPermission)
  //   }
  //   if (device == null) return <ActivityIndicator />
  //  const takePicture = async()=>{
  //   if(camera!=null){
  //     const photo = await camera.current.takePhoto()
  //     setImageData(photo.path)
  //     setTakePhotoClicked(false)
  // console.log(photo.path)
  //   }
  //  }
  return (
    <SafeAreaView>
      <ImageBackground
        style={style.userCircle}
        source={require('../../assets/images/Ellipse15.png')}
      />
      <Text style={style.userGreet}>Hello Doctor!</Text>
      <Text style={style.userGreet2}>Hope you feel great today</Text>
      <View style={style.dashboard}>
        <Text style={style.dashboardTitle}>Patients List</Text>
        <View style={style.dashboardContainer}>
          <Text
            style={style.dashboardOptions}
            onPress={() => navigation.navigate('Patient')}>
            Latifah Aldhaferi
          </Text>
          <Icon
            name="arrow-right"
            size={20}
            color="#638184"
            style={{position: 'absolute', marginLeft: 183, top: 4}}
            onPress={() => navigation.navigate('Patient')}
          />
        </View>
        <View style={style.dashboardContainer}>
          <Text
            style={style.dashboardOptions}
            onPress={() => navigation.navigate('Patient')}>
            Khalid Abdullah
          </Text>
          <Icon
            name="arrow-right"
            size={20}
            color="#638184"
            style={{position: 'absolute', marginLeft: 183, top: 4}}
            onPress={() => navigation.navigate('Patient')}
          />
        </View>
        <View style={style.dashboardContainer}>
          <Text
            style={style.dashboardOptions}
            onPress={() => navigation.navigate('Patient')}>
            Janna Almuqaisib
          </Text>
          <Icon
            name="arrow-right"
            size={20}
            color="#638184"
            style={{position: 'absolute', marginLeft: 183, top: 4}}
            onPress={() => navigation.navigate('Patient')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'left',
            width: 200,
            gap: 10,
          }}>
          <Icon
            name="plus"
            size={20}
            color="#DC989A"
            onPress={() => navigation.navigate('AddPatient')}
          />
          <Text
            style={style.addPatientButton}
            onPress={() => navigation.navigate('AddPatient')}>
            Add a patient
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DoctorHome;
