import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import Styles from '../components/StyleComponent';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import IMaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
const ViewProjectDetailsScreen = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);
  const [projectDetail, setProjectDetail] = useState([]);

  firestore()
    .collection('green_projects')
    .doc(route.params.userId)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        setProjectDetail(documentSnapshot.data());
      }
      setLoading(false);
    });
  useEffect(() => {
    return () => {
      setProjectDetail();
    };
  }, []);

  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      {loading ? (
        <View style={Styles.ProjectLoading}>
          <Image
            style={{width: 200, height: 200}}
            source={require('../assets/icons/synchronize.png')}
          />
          <Text style={Styles.ProjectDetailText4}>Loading...!</Text>
          <ActivityIndicator color={'#009e60'} size={70} />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <ImageBackground
            source={
              !projectDetail.projImage
                ? require('../assets/project.jpg')
                : {uri: projectDetail.projImage}
            }
            resizeMode="stretch"
            style={Styles.ProjectDetailImage}>
            <View style={Styles.ProjectDetailImageBack}>
              <View style={Styles.BacklHeader}>
                <TouchableOpacity
                  style={Styles.BackIconContainer}
                  onPress={() => navigation.goBack()}>
                  <IoniconsIcons
                    name="chevron-back"
                    color={'#fff'}
                    size={25}
                    style={Styles.BackIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View style={Styles.ProjectDetailBody}>
            <View style={Styles.ProjectDetailTopic}>
              <Text style={Styles.ProjectDetailText1}>
                {projectDetail.projectName}
              </Text>
              <View style={Styles.ProjectDetailInfo}>
                <IMaterialIconsIcons
                  name="location-on"
                  size={22}
                  color={'#fa8072'}
                  style={Styles.ProjectDetailInfoIcon}
                />
                <Text style={Styles.ProjectDetailText2}>
                  {projectDetail.address}
                </Text>
              </View>
              <View style={Styles.ProjectDetailInfo}>
                <IMaterialIconsIcons
                  name="alternate-email"
                  size={22}
                  color={'#1e90ff'}
                  style={Styles.ProjectDetailInfoIcon}
                />
                <Text style={Styles.ProjectDetailText2}>
                  {projectDetail.email}
                </Text>
              </View>
            </View>
            <View style={Styles.ProjectDetailSummery}>
              <View style={Styles.ProjectDetailCol1}>
                <View style={Styles.ProjectDetailRow}>
                  <FontAwesome5Icons name="coins" size={20} color={'#ffd700'} />
                  <Text style={Styles.ProjectDetailColText1}>
                    $ {projectDetail.creditPrice}
                  </Text>
                </View>
                <Text style={Styles.ProjectDetailColText2}>Per Carbon Ton</Text>
              </View>
              <View style={Styles.ProjectDetailCol2}>
                <View style={Styles.ProjectDetailRow}>
                  <EntypoIcons name="leaf" size={20} color={'#008000'} />
                  <Text style={Styles.ProjectDetailColText1}>
                    {projectDetail.creditsAmount} tonne(s)
                  </Text>
                </View>
                <Text style={Styles.ProjectDetailColText2}>
                  Available Tonnes
                </Text>
              </View>
            </View>
            <View>
              <Text style={Styles.ProjectDetailText3}>Description</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.ProjectDetailDes}>
                  {projectDetail.description}
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ViewProjectDetailsScreen;
