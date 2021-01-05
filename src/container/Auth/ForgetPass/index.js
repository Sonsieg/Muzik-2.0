import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import asset from '../../../asset';
import ButtonTab from '../../../components/ButtonTab';
import InputText from '../../../components/InputText';
import {scale} from '../../../components/ScaleSheet';

export class ForgetPass extends Component {
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.background2}>
        <View
          style={{
            marginHorizontal: scale(20),
            flex: 1,
            marginVertical: scale(20),
          }}>
          <TouchableOpacity
            style={{width: scale(30), width: scale(30)}}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              source={asset.back}
              style={{
                width: scale(30),
                width: scale(30),
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: scale(250),
                  height: scale(250),
                }}
                source={asset.Logo}
              />
              <InputText title="Email" />
              <Text></Text>
              <ButtonTab title="Submit" />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default ForgetPass;
