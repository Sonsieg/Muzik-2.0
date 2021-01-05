import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import InputText from '../../../components/InputText';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import ButtonTab from '../../../components/ButtonTab';
import GoogleFacebook from '../../../components/GoogleFacebook';
import asset from '../../../asset';
export class Login extends Component {
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.background2}>
        <View
          style={{
            marginHorizontal: scale(20),
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
              Login
            </Text>
            <Text
              style={{
                fontStyle: 'italic',
                fontSize: scale(16),
                color: 'white',
              }}>
              Sign in for awesome chill and relax experiences.
            </Text>
            <InputText title="Email" />
            <InputText title="Password" />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ForgetPass')}>
              <Text
                style={{
                  textAlign: 'right',
                  fontStyle: 'italic',
                  fontSize: scale(16),
                  color: 'white',
                  marginTop: scale(20),
                }}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
            <ButtonTab
              title="Login"
              onPress={() => this.props.navigation.navigate('MyTabs')}
            />
            <Text></Text>

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: scale(20),
                  color: 'white',
                  fontStyle: 'italic',
                }}>
                Don’t have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Registration')}>
                <Text
                  style={{
                    fontSize: scale(20),
                    color: '#f8f8ff',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                  }}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </ScrollView>
          <GoogleFacebook title="Or login with" />
        </View>
      </ImageBackground>
    );
  }
}
export default Login;
