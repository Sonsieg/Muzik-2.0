import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import asset from '../../../asset';
import IconPlay from '../../../components/IconPlay';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import Slider from '@react-native-community/slider';
export default class Playmusic extends Component {
  constructor(props){
    super(props);
    this.state={
      number: 0,
    }
  }
  render() {
    // const {number} = this.state;
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.background2}>
        <View
          style={{
            marginHorizontal: scale(20),
            // marginVertical: scale(10),
            // justifyContent: 'space-around',
            flex: 1,
          }}>
          <Top />
          <Image
            style={{
              width: '100%',
              height: '50%',
              borderRadius: scale(10),
              marginVertical: scale(10),
            }}
            resizeMode="cover"
            source={asset.music}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: scale(10),
            }}>
            <Text style={{color: 'white', fontSize: scale(12)}}>00.00</Text>
          <Text style={{color: 'white', fontSize: scale(12)}}>{this.state.number}</Text>
          </View>
          <Slider
            style={{width: "100%", height: 40}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={(values)=>this.setState({number: values})}
            step={1}
          />
          <IconPlay />
        </View>
      </ImageBackground>
    );
  }
}
