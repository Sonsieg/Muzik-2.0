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
import asset from '../../../asset';
import Edit from '../../../components/Edit';
import Edit2 from '../../../components/Edit/Edit';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';

export class UpdateProfile extends Component {
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.background2}>
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
              source={asset.coco}
            />
          </View>
          <Text style={styles.text}>Account</Text>
          <Edit onPress={() => this.props.navigation.navigate('Profile')} text="Edit Profile" />
          <Edit text="Change Password" />
          <Edit text="Change Login Accces" />
          <Edit text="League" />
          <Edit onPress={() => this.props.navigation.navigate('Login')} text="Logout" />
          <Text style={styles.text}>Notifications</Text>
          <Edit2 text="Notifications" />
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