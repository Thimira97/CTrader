import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import SubHeaderComponent from '../../components/user_components/SubHeaderComponent';
import {AuthContext} from '../../navigation/user_navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const VehicleScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [vehicleType, setVehicleType] = useState('');
  const [fuelType, setFuelType] = useState('');

  firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var userdata = documentSnapshot.data();
        setVehicleType(userdata.vehicleType);
        setFuelType(userdata.fuelType);
      }
    });

  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <SubHeaderComponent Navigation={navigation} ScreenName={'My Vehicle'} />
      <ImageBackground
        source={require('../../assets/background_images/VehicleScreenBg.jpg')}
        resizeMode="cover"
        style={Styles.VehicleBackImage}
      />
      <View style={Styles.VehicleContain}>
        <View style={Styles.VehicleTextContain}>
          <Text style={Styles.VehicleText1}>Vehicle Details</Text>
          <View style={Styles.VehicleTextArea}>
            <Text style={Styles.VehicleText2}>Vehicle Type :</Text>
            <Text style={Styles.VehicleText2}>{vehicleType}</Text>
          </View>
          <View style={Styles.VehicleTextArea1}>
            <Text style={Styles.VehicleText2}>Fuel Type :</Text>
            <Text style={Styles.VehicleText2}>{fuelType}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={Styles.Button}
          onPress={() => navigation.navigate('UpdateVehicleScreen')}>
          <Text style={Styles.ButtonText}>Update Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VehicleScreen;
