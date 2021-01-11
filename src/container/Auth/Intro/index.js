import React, {Component} from 'react';
import {
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import asset from '../../../asset';
import ButtonTab from '../../../components/ButtonTab';
import {scale} from '../../../components/ScaleSheet';
export default class Intro extends Component {
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.Home}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: scale(20),
          }}>
          <Image
            resizeMode="contain"
            style={{
              width: scale(250),
              height: scale(250),
              marginTop: '20%',
              marginVertical: scale(20),
            }}
            source={asset.Logo}
          />
          <Text
            style={{
              fontSize: scale(25),
              color: '#f8f8ff',
              fontStyle: 'italic',
            }}>
            Music
          </Text>
          <Text
            style={{
              fontSize: scale(20),
              color: '#f8f8ff',
              fontStyle: 'italic',
              marginBottom: scale(20),
            }}>
            Play all night
          </Text>
          <ButtonTab
            title="Login"
            onPress={() => this.props.navigation.navigate('Login')}
            />
          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: scale(25),
                color: '#f8f8ff',
                fontStyle: 'italic',
                marginVertical:scale(20)
              }}>
              Let's go babe!
            </Text>
          </TouchableOpacity> */}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: scale(20),
                color: '#f8f8ff',
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
        </View>
      </ImageBackground>
    );
  }
}
