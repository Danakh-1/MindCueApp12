import * as React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import style from '../../components/style';

function PatientSearch({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <SafeAreaView>
      <View>
        <Searchbar
          iconColor="#DC989A"
          placeholderTextColor={'#DC989A'}
          style={style.search}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    </SafeAreaView>
  );
}

export default PatientSearch;

// function ScanQrCode() {
//   // const devices = Camera.getAvailableCameraDevices();
//   const devices = useCameraDevices();
//   const device = devices.find((d) => d.position === 'back');
//   const camera = useRef(null);
//   const [imageData, setImageData] = useState('');
//   const [takePhotoClicked,setTakePhotoClicked] = useState(false);

//   useEffect(() => {
//     const checkPermission = async () => {
//       const newCameraPermission = await Camera.requestCameraPermission();
//       const newMicrophonePermission = await Camera.requestMicrophonePermission();
//       console.log(newCameraPermission);
//     };
//     checkPermission();
//   }, []);

//   if (device == null) return <ActivityIndicator />;

//   const takePicture = async () => {
//     if(camera.current != null){
//       const photo = await camera.current.takePhoto();
//       setImageData(photo.path);
//       setTakePhotoClicked(false);
//       console.log(photo.path);
//     }
//   };

//   return (
//     <View style={{flex:1}}>
//       <View style={{flex:1}}>
//         <Camera
//           ref={camera}
//           style={StyleSheet.absoluteFill}
//           device={device}
//           isActive={true}
//           photo
//         />
//         <TouchableOpacity
//           style={{
//             width:60,
//             height:60,
//             borderRadius:30,
//             backgroundColor:'pink',
//             position:'absolute',
//             bottom:50,
//             alignSelf:'center'
//           }}
//           onPress={() => {
//             takePicture();
//             setTakePhotoClicked(true);}}
//           />
//           </View>
//           </View>
//   );
//   }

//   export default ScanQrCode;
