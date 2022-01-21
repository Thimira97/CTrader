import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Container1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  //   LandingScreen Styles
  LandingBackgroundImage: {
    flex: 1.5,
  },
  LandingBack: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 22,
  },
  LandingTopicText: {
    width: '90%',
    color: '#fff',
    lineHeight: 45,
    fontSize: 32,
    fontFamily: 'PlayfairDisplay-Black',
  },
  LandingBackground: {
    flex: 1,
    padding: 22,
    backgroundColor: '#000',
  },
  LandingDescription: {
    paddingBottom: 15,
  },
  DescriptionText: {
    color: '#5e5e5e',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
  },
  LandingButtonContain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  LandingButton1: {
    backgroundColor: 'rgb(0,158,96)',
    padding: 15,
    borderRadius: 15,
    width: width / 1.15,
    marginTop: 10,
  },
  LandingButton2: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    padding: 15,
    borderRadius: 15,
    width: width / 1.15,
    marginTop: 10,
  },
  LandingButtonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Black',
  },
  //   LandingScreen Styles
  // SignUp, SignIn, ForgetPassword, VerfyEmail & NewPassword Screens Styles
  BackgroundImage: {
    flex: 1,
    width: width,
    height: height / 1.75,
  },
  BackgroundColor: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    justifyContent: 'center',
    width: width,
    height: height / 1.75,
  },
  Logo: {
    alignSelf: 'center',
    tintColor: '#fff',
    height: 150,
    width: 140,
  },
  Form: {
    flex: 1.1,
    backgroundColor: '#fff',
    width: width,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 25,
  },
  InputFieldContain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Input: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: 'rgba(0,158,96,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 15,
    width: width / 1.15,
  },
  InputField: {
    width: width / 1.5,
    marginLeft: 15,
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
  },
  Bottom: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  Button: {
    backgroundColor: '#009e60',
    borderRadius: 20,
    padding: 15,
    width: width / 1.15,
  },
  ButtonText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Bold',
  },
  OTPInputArea: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  OTPInput: {
    borderRadius: 10,
    backgroundColor: 'rgba(0,158,96,0.2)',
    width: width / 5,
  },
  OTPInputField: {
    width: width / 5,
    fontSize: 22,
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'center',
  },
  Text1: {
    color: '#fff',
    fontSize: 36,
    fontFamily: 'PlayfairDisplay-Black',
    padding: 25,
    marginBottom: 20,
  },
  Text2: {
    color: '#009e60',
    textAlign: 'right',
    marginBottom: 25,
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
  },
  Text3: {
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
  },
  // SignUp, SignIn, ForgetPassword, VerfyEmail & NewPassword Screens Styles
  //Header Styles
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    height: 90,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
  },
  TopicText: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'PlayfairDisplay-Black',
  },
  //Header Styles
  //Home Styles
  HomeHeaderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#009e60',
    height: 100,
  },
  HomeHeaderMiddle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
  },
  HomeUser: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginRight: 10,
  },
  HomeLogo: {
    tintColor: '#fff',
    width: 140,
    height: 50,
  },
  HomeBaricon: {
    tintColor: '#fff',
    height: 30,
    width: 30,
  },
  HomeMainIconContain: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  HomeMainIcon: {
    width: 150,
    height: 150,
  },
  HomeCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  HomeCard: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#5e5e5e',
    marginBottom: 10,
    width: width * 0.9,
    height: 75,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  HomeIcon: {
    width: 50,
    height: 50,
  },
  HomeIcon1: {
    width: 70,
    height: 70,
  },
  HomeCardDetails: {
    width: 250,
    borderLeftWidth: 2,
    borderLeftColor: '#5e5e5e',
    paddingLeft: 20,
  },
  HomeText1: {
    color: '#009e60',
    fontSize: 32,
    fontFamily: 'PlayfairDisplay-Black',
  },
  HomeText2: {
    color: '#5e5e5e',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
    width: 300,
  },
  HomeText3: {
    color: '#009e60',
    fontSize: 18,
    fontFamily: 'NunitoSans-Black',
  },
  HomeText4: {
    color: '#5e5e5e',
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
  },
  //Home Styles
  //GreenProject Styles
  ProjectBody: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  ProjectCard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  ProjectImage: {
    width: width / 1.1,
    height: height / 3,
    borderRadius: 20,
  },
  ProjectIcon: {
    alignItems: 'flex-end',
  },
  ProjectImageBack: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: width / 1.1,
    height: height / 3,
    borderRadius: 20,
  },
  ProjectDetails: {
    top: 22,
    padding: 20,
  },
  ProjectCardBottom: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ProjectCardBottom1: {
    backgroundColor: 'rgba(0,158,96,0.8)',
    borderRadius: 5,
    padding: 5,
    width: 150,
  },
  ProjectText1: {
    color: '#fff',
    fontSize: 26,
    textShadowRadius: 15,
    textShadowColor: '#000',
    fontFamily: 'PlayfairDisplay-Black',
  },
  ProjectText2: {
    color: '#fff',
    fontSize: 18,
    textShadowRadius: 15,
    textShadowColor: '#000',
    fontFamily: 'NunitoSans-Regular',
  },
  ProjectText3: {
    color: '#fff',
    fontSize: 16,
    textShadowRadius: 15,
    textShadowColor: '#000',
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
  },
  //GreenProject Styles
  //GreenProjectDetail Styles
  ProjectDetailImage: {
    flex: 1,
    width: width,
    height: height / 4,
  },
  ProjectDetailImageBack: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    justifyContent: 'center',
    width: width,
    height: height / 4,
  },
  BacklHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginRight: 25,
  },
  BackIconContainer: {
    marginBottom: 60,
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: 40,
    height: 40,
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProjectDetailBody: {
    flex: 3.5,
    backgroundColor: '#fff',
    width: width,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  ProjectDetailTopic: {
    paddingTop: 10,
  },
  ProjectDetailInfo: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  ProjectDetailInfoIcon: {
    paddingRight: 10,
  },
  ProjectDetailSummery: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#5e5e5e',
    padding: 10,
    marginTop: 20,
  },
  ProjectDetailCol1: {
    alignItems: 'center',
    width: 170,
  },
  ProjectDetailCol2: {
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#5e5e5e',
    width: 170,
  },
  ProjectDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProjectDetailColText1: {
    color: '#000',
    fontSize: 16,
    paddingTop: 10,
    fontFamily: 'NunitoSans-Black',
    paddingLeft: 5,
  },
  ProjectDetailColText2: {
    color: '#5e5e5e',
    fontSize: 14,
    paddingTop: 10,
    fontFamily: 'NunitoSans-Regular',
  },
  ProjectDetailDes: {
    color: '#5e5e5e',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
    marginBottom: 275,
  },
  ProjectDetailFooter: {
    position: 'relative',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    height: 75,
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
  },
  ProjectDetailInput: {
    borderRadius: 10,
    backgroundColor: 'rgba(0,158,96,0.2)',
    padding: 5,
    width: 100,
  },
  ProjectDetailTextInput: {
    color: 'rgb(0,158,96)',
    fontSize: 16,
    fontFamily: 'NunitoSans-Bold',
    width: 90,
    textAlign: 'center',
  },
  ProjectDetailButton: {
    backgroundColor: '#009e60',
    borderRadius: 10,
    padding: 15,
  },
  ProjectDetailButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'NunitoSans-Black',
  },
  ProjectDetailText1: {
    color: '#000',
    fontSize: 26,
    lineHeight: 46,
    fontFamily: 'PlayfairDisplay-Black',
  },
  ProjectDetailText2: {
    color: '#5e5e5e',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
  },
  ProjectDetailText3: {
    color: '#000',
    fontSize: 22,
    paddingTop: 15,
    fontFamily: 'NunitoSans-Black',
    paddingBottom: 5,
  },
  ProjectDetailText4: {
    color: '#5e5e5e',
    fontSize: 16,
    fontFamily: 'NunitoSans-Black',
    paddingLeft: 10,
  },
  //GreenProjectDetail Styles
  // Notofocation Screen Styles
  NotificationBody: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  NotificationCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
    marginBottom: 15,
  },
  NotifiButton: {
    backgroundColor: '#009e60',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 200,
  },
  NotificationText1: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
  },
  NotificationText2: {
    color: '#696969',
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
    paddingTop: 10,
    textAlign: 'right',
  },
  NotifiButtonText: {
    fontSize: 16,
    fontFamily: 'NunitoSans-Black',
    color: '#fff',
    textAlign: 'center',
  },
  // Notofocation Screen Styles
  //Cart Styles
  CartBody: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  CartHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    marginBottom: 10,
  },
  CartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
  },
  ProjectImg: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  CartItemRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'rgba(0,158,96,0.1)',
    borderRadius: 10,
    marginTop: 20,
    width: 50,
  },
  RemoveIcon: {
    position: 'absolute',
    top: -15,
    left: 35,
  },
  CartFooter: {
    padding: 20,
    height: 210,
  },
  CartBill: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
  },
  CartTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,158,96,0.2)',
    marginBottom: 10,
  },
  CartTotalLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CartText1: {
    color: '#5e5e5e',
    fontSize: 20,
    fontFamily: 'NunitoSans-Regular',
    width: 180,
  },
  CartText2: {
    color: '#009e60',
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
  },
  CartText3: {
    color: '#009e60',
    fontSize: 18,
    fontFamily: 'NunitoSans-Black',
  },
  CartText4: {
    color: '#009e60',
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
  },
  CartText5: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'NunitoSans-Black',
    textAlign: 'center',
  },
  //Cart Styles
  //CheckOut Styles
  CheckOuttBody: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  Payment: {
    marginTop: 10,
    marginBottom: 5,
  },
  PaymentType: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  PaymentImgContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
  },
  PaymentImg: {
    width: 50,
    height: 50,
  },
  PaymentForm: {
    marginTop: 10,
  },
  CheckOutFooter: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 65,
    marginTop: 20,
  },
  CheckOutInputContainer: {
    marginTop: 10,
  },
  CheckOutTextInputField: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
  },
  CheckOutTextInput: {
    color: '#009e60',
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
  },
  CheckOutInputContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  CheckOutTextInput1: {
    color: '#009e60',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
    width: width * 0.4,
  },
  CheckOutText1: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'NunitoSans-Black',
  },
  CheckOutText2: {
    color: '#009e60',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
  },
  CheckOutText3: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
  },
  CheckOutText4: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'NunitoSans-Black',
  },
  //CheckOut Styles
  //DrawerContentComponent Styles
  DrawerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
  },
  CrossIcon: {
    alignItems: 'flex-end',
    paddingRight: 15,
    marginTop: -15,
  },
  CrossIconContain: {
    backgroundColor: 'rgba(0,158,96,0.3)',
    padding: 5,
    borderRadius: 10,
  },
  DrawerImg: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  DrawerTextContain: {
    padding: 10,
    marginBottom: 5,
  },
  DrawerTitle: {
    padding: 10,
  },
  DrawerText: {
    color: '#5e5e5e',
    fontSize: 18,
    fontFamily: 'NunitoSans-Black',
  },
  DrawerText1: {
    color: '#009e60',
    fontSize: 16,
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
  },
  DrawerText2: {
    color: '#009e60',
    fontSize: 24,
    fontFamily: 'PlayfairDisplay-Black',
  },
  DrawerText3: {
    color: '#009e60',
    fontSize: 22,
    fontFamily: 'PlayfairDisplay-Black',
    textAlign: 'center',
  },
  DrawerLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DrawerFooter: {
    borderTopColor: 'rgba(0,0,0,0.2)',
    borderTopWidth: 1,
  },
  //DrawerContentComponent Styles
  //Profile Screens Styles
  ProfileContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ProfileBackIcon1: {
    position: 'absolute',
    padding: 20,
    marginTop: 20,
  },
  ProfileImage: {
    position: 'relative',
    borderBottomLeftRadius: 250,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    justifyContent: 'center',
    width: width,
    height: height * 0.5,
  },
  ProfileTextContainer: {
    padding: 20,
  },
  ProfileButtonContain: {
    padding: 20,
    marginTop: 10,
  },
  ProfileButtomTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  ProfileButton: {
    width: width * 0.43,
    backgroundColor: '#009e60',
    borderRadius: 10,
    padding: 15,
  },
  ProfileBackIcon: {
    paddingLeft: 20,
    marginTop: -40,
  },
  ProfileUpdateTextContain: {
    padding: 20,
    alignItems: 'center',
  },
  ProfileText1: {
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
    paddingBottom: 20,
  },
  ProfileText2: {
    color: '#009e60',
    fontSize: 42,
    fontFamily: 'PlayfairDisplay-Black',
  },
  ProfileText3: {
    color: '#009e60',
    fontSize: 26,
    fontFamily: 'NunitoSans-Regular',
  },
  //Profile Screens Styles
  //Vehicle Screeen Styles
  VehicleContain: {
    alignItems: 'center',
    padding: 20,
  },
  VehicleBackImage: {
    width: width,
    height: height * 0.4,
  },
  VehicleTextContain: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
    marginBottom: 20,
    padding: 20,
    width: width * 0.9,
  },
  VehicleTextArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  VehicleTextArea1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  VehicleText1: {
    fontSize: 20,
    fontFamily: 'NunitoSans-Black',
    color: '#009e60',
    paddingBottom: 10,
  },
  VehicleText2: {
    fontSize: 18,
    fontFamily: 'NunitoSans-Bold',
    color: '#000',
  },
  //Vehicle Screeen Styles
  //Scan Screeen Styles
  ScanContain: {
    alignItems: 'center',
    padding: 20,
  },
  ScanImageBack: {
    width: width * 0.66,
    height: height * 0.4,
  },
  ScanTextContain: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
    marginTop: 10,
    marginBottom: 20,
    padding: 20,
    width: width * 0.9,
  },
  ScanText1: {
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'center',
    padding: 20,
    color: '#5e5e5e',
  },
  ScanText2: {
    fontSize: 28,
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
    paddingBottom: 20,
    color: '#009e60',
  },
  //Scan Screeen Styles
});

export default Styles;