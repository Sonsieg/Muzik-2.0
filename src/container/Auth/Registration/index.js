import React, {Component} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import InputText from '../../../components/InputText';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import ButtonTab from '../../../components/ButtonTab';
import GoogleFacebook from '../../../components/GoogleFacebook';
import asset from '../../../asset';
export class Registration extends Component {
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
            flex: 1,
          }}>
          <Top />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: scale(30),
                color: 'white',
                // marginVertical: scale(10),
              }}>
              Sign up
            </Text>
            <Text
              style={{
                fontStyle: 'italic',
                fontSize: scale(16),
                color: 'white',
              }}>
              Sign up for free meditation, chill and relax experiences with
              music.
            </Text>

            <InputText title="Name" />
            <InputText title="Email" />
            <InputText title="Password" />
            <Text></Text>
            <ButtonTab title="Sign Up" />

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: scale(20),
                  color: 'white',
                  fontStyle: 'italic',
                }}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text
                  style={{
                    fontSize: scale(20),
                    color: '#f8f8ff',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <Text>` `</Text>
          </ScrollView>
          <GoogleFacebook title="Or login with" />
        </View>
      </ImageBackground>
    );
  }
}
export default Registration;
