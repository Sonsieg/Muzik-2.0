import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Edit from '../../../components/Edit';
import Edit2 from '../../../components/Edit/Edit';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';

export class UpdateProfile extends Component {
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../../asset/images/background2.png')}>
        <View
          style={{
            marginHorizontal: scale(20),
            // marginVertical: scale(10),
            justifyContent: 'space-around',
            // flex: 1,
          }}>
          <Top />
          <Text
            style={{
              fontSize: scale(35),
              color: 'white',
              fontStyle: 'italic',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Update Profile
          </Text>
          <View style={{alignItems: 'center'}}>
            <Image
              resizeMode="cover"
              style={{
                width: scale(150),
                height: scale(150),
                borderRadius: scale(75),
              }}
              source={require('../../../asset/images/coco.png')}
            />
          </View>
          <Text style={styles.text}>Account</Text>
          <Edit text="Edit Profile" />
          <Edit text="Change Password" />
          <Edit text="Change Login Accces" />
          <Edit text="League" />
          <Text style={styles.text}>Notifications</Text>
          <Edit2 text="Notifications" />
          <Edit2 text="Notifications App" />
          <Text style={styles.text}>Others</Text>

          <TouchableOpacity>
            <Text
              style={{
                fontSize: scale(20),
                color: 'white',
                fontStyle: 'italic',
                fontWeight: 'normal',
              }}>
              Privary Policy
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default UpdateProfile;
const styles = StyleSheet.create({
  text: {
    fontSize: scale(18),
    color: 'ghostwhite',
    // fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
