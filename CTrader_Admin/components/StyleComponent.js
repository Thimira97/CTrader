import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Container1: {
    flex: 1,
  },
  //   LandingScreen Styles
  LandingBackgroundImage: {
    marginTop: height / 20,
    width: width * 0.9,
    height: height * 0.5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  LandingBackground: {
    padding: '5%',
    alignSelf: 'center',
  },
  LandingTopicText: {
    color: '#009e60',
    fontSize: 32,
    lineHeight: 40,
    fontFamily: 'NunitoSans-Black',
    textAlign: 'center',
  },
  DescriptionText: {
    color: '#5e5e5e',
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'center',
    paddingTop: '3%',
  },
  TextColor: {
    color: '#009e60',
  },
  LandingButton: {
    backgroundColor: 'rgb(0,158,96)',
    padding: '4%',
    borderRadius: 15,
    width: width / 1.15,
    marginTop: '3%',
    marginBottom: '3%',
  },
  LandingButtonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Black',
  },
  //   LandingScreen Styles
  // Login SignUp Screen Styles
  AuthBackgroundImage: {
    marginTop: height / 20,
    width: width * 0.6,
    height: height * 0.35,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  AuthBackgroundImage1: {
    marginTop: height / 20,
    width: width * 0.55,
    height: height * 0.3,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  AuthText: {
    color: '#009e60',
    fontSize: 33,
    lineHeight: 40,
    fontFamily: 'NunitoSans-Black',
    textAlign: 'center',
  },
  InputFieldContain: {
    paddingTop: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Input: {
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: 'rgba(0,158,96,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1%',
    marginBottom: '3%',
    width: width / 1.15,
  },
  InputField: {
    width: width / 1.5,
    marginLeft: '4%',
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
  },
  InputFieldText: {
    width: width / 1.5,
    marginLeft: '4%',
    fontSize: 20,
    color: '#009e60',
    fontFamily: 'NunitoSans-Regular',
    padding: '3%',
  },
  AuthBottomContain: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  InputMulti: {
    borderRadius: 20,
    backgroundColor: 'rgba(0,158,96,0.2)',
    padding: 5,
    marginBottom: 15,
    width: width / 1.15,
    height: width * 0.48,
  },
  InputMultiBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputFieldMulti: {
    width: width / 1.5,
    marginLeft: 15,
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
  },
  // Login SignUp Screen Styles
  // Home Screen Styles
  HomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '7%',
    marginLeft: '2%',
    marginRight: '2%',
    padding: '3%',
    backgroundColor: '#009e60',
    borderRadius: 15,
  },
  Logo: {
    tintColor: '#fff',
    width: '40%',
    height: '90%',
  },
  UserImg: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  HomeTopicContain: {
    flex: 1,
    paddingLeft: '6%',
    paddingTop: '3%',
  },
  userNameText: {
    color: '#5e5e5e',
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
    paddingRight: '2%',
  },
  HomeTopic: {
    color: '#009e60',
    fontSize: 28,
    lineHeight: 40,
    fontFamily: 'NunitoSans-Black',
  },
  HomeTopicImgContain: {
    alignSelf: 'center',
    paddingTop: '30%',
    position: 'absolute',
  },
  HomeTopicImg: {
    height: width * 0.45,
    width: width * 0.45,
  },
  HomeCardArea: {
    flex: 1.3,
  },
  HomeCardContain: {
    paddingLeft: '6%',
    paddingRight: '6%',
    alignSelf: 'center',
  },
  HomeCard: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#009e60',
    padding: '3%',
    margin: '1%',
    borderRadius: 15,
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  HomeCardTopic: {
    color: '#5e5e5e',
    fontSize: 18,
    fontFamily: 'NunitoSans-Black',
    width: width * 0.2,
  },
  HomeCardImg: {
    height: width * 0.1,
    width: width * 0.1,
  },
  // Home Screen Styles
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: '#009e60',
    height: width * 0.2,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
  },
  TopicText: {
    color: '#fff',
    fontSize: 26,
    fontFamily: 'NunitoSans-Black',
  },
  //Header Styles
  // Admin & Users & Requests & Projects List Styles
  ListCardContain: {
    padding: '4%',
  },
  ListCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '4%',
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
    borderRadius: 15,
    marginBottom: '4%',
  },
  ListCardTop: {
    padding: '4%',
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
    borderRadius: 15,
    marginBottom: '4%',
  },
  ListCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ListIndexText: {
    color: '#5e5e5e',
    fontSize: 18,
    fontFamily: 'NunitoSans-Bold',
    paddingLeft: '3%',
    paddingRight: '5%',
  },
  ListTextContain: {
    paddingLeft: '5%',
  },
  ListTextDes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ListText1: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'NunitoSans-Black',
  },
  ListText2: {
    color: '#5e5e5e',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
    lineHeight: 25,
  },
  ListText3: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'NunitoSans-Bold',
    lineHeight: 25,
  },
  ListText4: {
    color: '#009e60',
    fontSize: 16,
    fontFamily: 'NunitoSans-Bold',
    lineHeight: 25,
  },
  ListCardView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  // Admin & Users & Requests & Projects List Styles
  //Project Details Screen Styles
  ProjectDetailImage: {
    flex: 1.5,
    width: width,
    height: height * 0.3,
  },
  ProjectDetailImageBack: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    justifyContent: 'center',
    width: width,
    height: height * 0.3,
  },
  BacklHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: -30,
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
    flex: 4.5,
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
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    height: 75,
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
  },
  ProjectDetailButton: {
    width: width * 0.4,
    borderRadius: 15,
    padding: 15,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'center',
  },
  ProjectDetailButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
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
  RedButton: {backgroundColor: '#fa8072'},
  GreenButton: {backgroundColor: '#009e60'},
  //Project Details Screen Styles
  // Profile Screen Styles
  ProfileContain: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileContain1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileImageContain: {
    width: 220,
    height: 220,
    backgroundColor: '#fff',
    borderRadius: 150,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
  },
  ProfileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'relative',
    alignSelf: 'center',
    marginTop: '4%',
  },
  ProfileBody: {
    padding: '5%',
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 350,
    marginTop: '3%',
    marginBottom: '3%',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
  },
  ProfileDes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '2%',
  },
  ProfileDesText: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'NunitoSans-Regular',
  },
  ProfileDesRight: {
    paddingLeft: '8%',
  },
  ProfileButtonContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '3%',
  },
  // Profile Screen Styles
});

export default Styles;
