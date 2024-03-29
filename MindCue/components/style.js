import {StyleSheet} from 'react-native';
import { getLeftStyles } from 'react-native-paper/lib/typescript/components/List/utils';

const style = StyleSheet.create({
  logoutButton: {
    borderRadius: 15,
    padding: 6,
    alignItems: 'center',
    position: 'relative',
    top:5,
    marginRight: 20,
    marginLeft: 20
  },
  logoutText: {
    color: 'lightpink',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button1: {
    width: 190,
    height: 40,
    backgroundColor: 'transparent',
    color: '#638184',
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 9,
    borderWidth: 2,
    borderColor: '#638184',
    textAlign: 'center',
  },
  button2: {
    width: 190,
    height: 40,
    backgroundColor: 'transparent',
    color: '#638184',
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 9,
    borderWidth: 2,
    borderColor: '#638184',
    textAlign: 'center',
    top: -55,
  },
  button3: {
    width: 190,
    height: 40,
    backgroundColor: 'transparent',
    color: '#638184',
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 9,
    borderWidth: 2,
    top: 35,
    borderColor: '#638184',
    textAlign: 'center',
  },
  button4: {
    width: 270,
    height: 40,
    backgroundColor: 'transparent',
    color: '#638184',
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 9,
    borderWidth: 1,
    borderColor: '#638184',
    textAlign: 'center',
  },
  button5: {
    width: 270,
    height: 40,
    backgroundColor: '#E7D4D4',
    color: '#DC989A',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'center',
    padding: 9,
    textAlign: 'center',
  },
  textbox: {
    color: '#638184',
    borderColor: '#638184',
    borderBottomWidth: 2,
    paddingHorizontal: 0,
    width: 190,
    height: 22,
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    backgroundColor: 'transparent',
  },
  box1: {
    width: 190,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    top: 130,
    marginHorizontal: '25%',
  },
  box2: {
    width: 190,
    height: 220,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 30,
    top: 100,
    marginHorizontal: '25%',
  },
  box3 : {
    color: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 8,
    top: -40,
  },
  box4: {
    width: 306,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    margin: 40,
  },
  box5: {
    width: 306,
    height: 275,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  signInTitle : {
    color: '#DC989A',
    fontFamily: 'Poppins-Bold',
    //fontWeight: 'bold',
    fontSize: 46,
    alignItems: 'center',
    justifyContent: 'center',
    width: 190,
    height: 80,
    top: 100,
    marginHorizontal: '25%',
  },
  registerTitle : {
    color: '#DC989A',
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    //fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 190,
    height: 80,
    top: 10,
    marginLeft: 100,
    marginBottom:8
  },
  signInText: {
    color: '#DC989A',
    textAlign: 'center',
    //fontWeight: 'bold',
    fontFamily: 'Lexend-Regular',
    top: 155,
    fontSize: 12,
    marginTop: 5,
  },
  userQues : {
    color: '#DC989A',
    textAlign: 'center',
    fontFamily: 'Lexend-Regular',
    top: -15,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    },
  numberInput : {
    backgroundColor: 'transparent',
    color: '#638184',
    borderColor: '#638184',
    borderBottomWidth: 5,
    paddingHorizontal: 0,
    textAlign: 'center',
    width: 190,
    height: 100,
    fontSize: 50,
    fontFamily: 'Lexend-Regular',
    backgroundColor: 'transparent',
  },
  numberInput1 : {
    backgroundColor: 'transparent',
    color: '#638184',
    borderColor: '#638184',
    borderBottomWidth: 5,
    paddingHorizontal: 0,
    paddingVertical: 0,
    textAlign: 'center',
    width: 190,
    height: 75,
    fontSize: 25,
    fontFamily: 'Lexend-Regular',
    backgroundColor: 'transparent',
  },
  userTitle : {
    color: '#DC989A',
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    //fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: 190,
  },
  userTypeContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    width: 170,
  },
  generalText : {
    color: '#638184',
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
  },
  generalText2 : {
    color: '#DC989A',
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
  },
  generalText3 : {
    color: '#638184',
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    width: 190,
    top: 20,
  },
  dashboard : {
    borderColor: '#EFD1D2',
    borderWidth: 5,
    justifyContent: 'center',
    alignContent: 'center',
    width: 190,
    borderRadius: 20,
    gap: 15,
    paddingBottom: 30,
    width: 330,
    alignItems: 'center',
    marginLeft: 45,
    top: 65
  },
  dashboardTitle : {
    backgroundColor: '#F4E5E6',
    color: '#DC989A',
    //fontWeight: 'bold',
    fontSize: 24,
    padding: 10,
    width: 320,
    textAlign: 'center',
    borderTopEndRadius: 15,
    fontFamily: 'Poppins-Regular',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  dashboardOptions : {
    color: '#638184',
    borderBottomWidth: 2,
    borderColor: '#638184',
    width: 200,
    fontSize: 18,
    paddingBottom: 15,
    fontFamily: 'Lexend-Regular',
  },
  generalBox : {
    borderColor: '#C2DCDE',
    borderWidth: 5,
    justifyContent: 'center',
    alignContent: 'center',
    width: 190,
    borderRadius: 20,
    gap: 5,
    paddingBottom: 10,
    width: 330,
    alignItems: 'center',
    marginLeft: 15,
    top: 10,
  },
  generalBox2 : {
    justifyContent: 'center',
    alignContent: 'center',
    width: 190,
    borderRadius: 20,
    gap: 7,
    padding: 10,
    width: 330,
    alignItems: 'left',
    marginLeft: 15,
  },
  triggersTitle : {
    backgroundColor: '#D2E5E7',
    color: '#638184',
    fontSize: 20,
    padding: 10,
    width: 320,
    height: 55,
    textAlign: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    fontFamily: 'Poppins-Regular',
  },
  triggerOptions : {
    color: '638184',
    fontFamily: 'Lexend-Regular',
    fontSize: 16,
    color: '#638184',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },  
  safeArea1: {
  marginLeft:10
  },  
  generalBoxEdit:{
   marginLeft:28
  },
  dashboardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  checkboxContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
  },
  keywords : {
    borderColor: '#C2DCDE',
    color: '#638184',
    borderWidth: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 190,
    borderRadius: 20,
    gap: 10,
    paddingBottom: 10,
    width: 330,
    marginLeft: 15,
    top: 30,
  },
  radiobuttonContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
  },
  reportButton: {
    width: 200,
    padding: 100,
  },
  timerContainer: {
    backgroundColor: "#F1F1F1", 
    alignItems: "center", 
    justifyContent: "center",
    top: 50,
  },
  QRContainer: {
    borderColor: '#C2DCDE',
    borderWidth: 5,
    justifyContent: 'center',
    alignContent: 'center',
    width: 190,
    borderRadius: 20,
    paddingBottom: 50,
    gap: 50,
    width: 330,
    alignItems: 'center',
    marginLeft: 15,
    top: 30,
  },
  doctorImage : {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#DC989A',
  },
  headerContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    justifyContent: 'center',
    backgroundColor: '#F2E1E2',
    padding: 20,
  },
  doctorTitle : {
    color: '#DC989A',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
  },
  bgImage: {
    flex: 1,
    width:390,
    height:490,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 100,
  },
  bgImage2: {
    flex: 1,
    width:306,
    height:550,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 40,
  },
  bgImage3: {
    flex: 1,
    width:306,
    height:399,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 120,
    margin: 40,
  },
  bgImage4: {
    flex: 1,
    width: 306,
    height: 475,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 120,
    margin: 40,
  },
  userCircle : {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 45,
    marginTop: 20,
  },
  userGreet: {
    color: '#638184',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    top: 20,
    marginLeft: 70,
  },
  userGreet2: {
    color: '#638184',
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    top: 17,
    marginLeft: 70,
  },
  bgGraphic1 : {
    flex: 1,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 300,
  },
  bgGraphic2 : {
    flex: 1,
    width: 23,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 280,
    top: 70,
  },
  bgGraphic3 : {
    flex: 1,
    width: 450,
    height: 700,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 0,
    top: 15,
  },
  bgGraphic4 : {
    flex: 1,
    width: 190,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 205,
    top: 370,
  },
  bgGraphic5 : {
    flex: 1,
    width: 57,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 18,
    top: 460,
  },
  bgGraphic6 : {
    flex: 1,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 85,
    top: 485,
  },
  bgGraphic7 : {
    flex: 1,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 300,
    top: -60,
  },
  bgGraphic8 : {
    flex: 1,
    width: 23,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 280,
    top: -75,
  },
  bgGraphic9 : {
    flex: 1,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 65,
    top: 520,
  },
  bgGraphic10 : {
    flex: 1,
    width: 23,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 40,
    top: 535,
  },
  bgGraphic11 : {
    flex: 1,
    width: 79,
    height: 79,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 290,
    top: -73,
  },
  bgGraphic12 : {
    flex: 1,
    width: 23,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 260,
    top: -85,
  },
  bgGraphic13 : {
    flex: 1,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 70,
    top: 520,
  },
  bgGraphic14 : {
    flex: 1,
    width: 23,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 50,
    top: 480,
  },
  bgGraphic15 : {
    flex: 1,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 95,
    top: 400,
  },
  bgGraphic16 : {
    flex: 1,
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: 310,
  },
  profileContainer1: {
    borderWidth: 2,
    borderColor: '#638184',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 15,
    borderRadius: 15,
    margin: 15,
  },
  profileContainer2: {
    borderWidth: 2,
    borderColor: '#638184',
    justifyContent: 'center',
    alignItems: 'left',
    flexDirection: 'column',
    paddingVertical: 20,
    padding: 10,
    gap: 6,
    paddingRight: 70,
    borderRadius: 15,
    width:270
  },
  profileContainer3: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: 20,
    padding: 10,
    gap: 6,
    borderRadius: 15,
  },
  profileContainer4: {
    justifyContent: 'center',
    alignItems: 'left',
    flexDirection: 'column',
    paddingVertical: 20,
    padding: 10,
    width: 275,
    gap: 6,
    borderRadius: 15,
  },
  userName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#638184',
  },
  userEmail: {
    fontFamily: 'Lexend-Regular',
    fontSize: 18,
    color: '#638184',
    marginBottom: 20,
  },
  userInfo: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#638184',
  },
  userInfoAd: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#638184',
    marginLeft:45
  },
  userECInfo: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#638184',
  },
  userEdit: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#DC989A',
    marginTop: 15,
    marginLeft:12
  },
  userEdit1:{
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#DC989A',
    marginTop: 10,
    marginLeft:12
  },
  userEdit2:{
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#DC989A',
    marginTop: 10,
    marginLeft:160
  },
  userEditInput : {
    width: 280,
    backgroundColor: 'transparent',
    height: 35,
    borderWidth: 1.5,
    borderColor: '#DC989A',
  },
  recentActivity : {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#638184',
    borderBottomWidth: 1,
    borderColor: '#638184',
    width: 360,
    marginLeft: 16,
    
  },
  titleStyle : {
    color: '#638184',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  linkStyle : {
    color: '#638184',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  logsContainer: {
    borderBottomWidth: 1,
    borderColor: '#638184',
    width: 328,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'left',
    flexDirection: 'column',
    marginLeft: 16,
    paddingHorizontal: 0,
  },
  seeMore : {
    color: '#DC989A',
    marginLeft: 270,
    fontFamily: 'Poppins-Bold',
    marginTop: 7,
  },
  search : {
    width: 328,
    borderRadius: 5,
    marginLeft: 16,
    backgroundColor: 'transparent',
    borderColor: '#DC989A',
    borderWidth: 1.5,
    marginVertical: 10,
  },
  doctorContainer: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    gap: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#638184',
    paddingVertical: 10,
    marginLeft: 30,
    top: 150,
  },
  doctorTitle: {
    color: '#638184',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  chatborder1: {
    width: 280,
    height: 200,
    marginLeft: 115,
    position: 'absolute',
  },
  chatborder2: {
    width: 260,
    height: 400,
    position: 'absolute',
  },
  chats: {
    color: '#638184',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    top: 150,
    marginLeft: 40,
  },
  timerStyle : {
    fontSize: 50,
    color: '#DC989A',
    backgroundColor: '#E5EFF0',
    fontFamily: 'BebasNeue-Regular',
    width: 280,
    textAlign: 'center',
    borderRadius: 15,
    margin: 30,
  },
  timerContainer : {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#C2DCDE',
    margin: 35,
    borderRadius: 18,
  },
  keywordContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    fontSize: 16,
    width: 275,
    fontFamily: 'Lexend-Regular',
  },
  keywordBox : {
    borderWidth: 1.5,
    backgroundColor: 'transparent',
    width: 280,
    fontSize: 16,
    borderColor: '#DC989A',
    borderRadius: 5,
    fontFamily: 'Lexend-Regular',
  },
  addButton : {
    color: '#DC989A',
    marginLeft: 250,
    fontFamily: 'Lexend-Regular',
  },
  ECcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    fontSize: 16,
    width: 275,
    fontFamily: 'Lexend-Regular',
    color: '#638184',
  },
  addPatientButton : {
    color: '#DC989A',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  
});

export default style;
