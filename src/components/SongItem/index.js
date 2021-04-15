import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from '../ScaleSheet';
import asset from '../../asset/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
export default class SongItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeart: false,
    };
  }
  // heart = () => {
  //   this.setState({showHeart: !this.state.showHeart});
  // };
  render() {
    const {item, onPress, onLike} = this.props;
    return (
      item && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: scale(8),
            justifyContent: 'space-between',
            // backgroundColor:"yellow"
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={onPress}>
            <Image
              source={{uri: this.props.image}}
              style={{
                width: scale(60),
                height: scale(60),
                borderRadius: scale(10),
              }}
              resizeMode="contain"
            />
            <View style={{marginLeft: scale(8)}}>
              <Text
                style={{
                  fontSize: scale(16),
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                {this.props.name}
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  color: 'white',
                  fontWeight: 'normal',
                }}>
                {this.props.singer}
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={onLike} >
              {/* {this.state.showHeart === false ? (
                <Icon name="heart-outline" size={scale(24)} color="white" />
              ) : (
                <Icon2 name="heart" size={scale(23)} color="white" />
              )} */}
              {item.islike ? (
                <Icon2 name="heart" size={scale(23)} color="white" />
              ) : (
                <Icon name="heart-outline" size={scale(24)} color="white" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      )
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
