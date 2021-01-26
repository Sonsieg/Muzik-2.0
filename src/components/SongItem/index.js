import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from '../ScaleSheet';
import asset from '../../asset/index';
export default class SongItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: scale(8),
          justifyContent:'space-between',
          // backgroundColor:"yellow"
        }}>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: this.props.image}}
            style={{
              width: scale(60),
              height: scale(60),
              borderRadius: scale(10),
            }}
            resizeMode="contain"
          />
          <View style={{marginLeft:scale(8)}}>
            <Text
              style={{
                fontSize: scale(16),
                color: 'white',
                fontWeight: 'bold',
              }}>
              {this.props.name}
            </Text>
            <Text style={{
                fontSize: scale(14),
                color: 'white',
                fontWeight: 'normal',
              }}>{this.props.singer}</Text>
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={{width: scale(20), height: scale(20)}}
              source={asset.heart}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  songitem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: scale(4),
  },
  order: {
    fontSize: scale(24),
    marginLeft: scale(8),
    // textDecorationLine: 'underline',
  },
  img: {
    width: scale(64),
    height: scale(64),
    borderRadius: scale(4),
    marginLeft: scale(8),
  },
  title: {
    marginBottom: scale(6),
    marginLeft: scale(6),
  },
  lable: {marginLeft: scale(6)},
  options: {
    flexDirection: 'row',
    position: 'absolute',
    right: 4,
    justifyContent: 'space-between',
  },
  p4: {padding: scale(4)},
});