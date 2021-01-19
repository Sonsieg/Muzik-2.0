import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import asset from '../../asset';
import {scale} from '../ScaleSheet';

export default class IconPlay extends Component {
  render() {
    return (
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={{width: scale(20), height: scale(20)}}
            source={asset.repeat}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={{width: scale(20), height: scale(20)}}
            source={asset.left}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={{width: scale(20), height: scale(20)}}
            source={asset.stop}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={{width: scale(20), height: scale(20)}}
            source={asset.right}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={{width: scale(20), height: scale(20)}}
            source={asset.download}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}
