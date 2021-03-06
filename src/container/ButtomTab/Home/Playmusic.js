import React, {Component, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import asset from '../../../asset';
import IconPlay from '../../../components/IconPlay';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import Slider from '@react-native-community/slider';
import {useRoute} from '@react-navigation/native';
import {setSaveMusicAction} from '../../../store/action/index';
// import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {connect} from 'react-redux';

const Playmusic = (props) => {
  const route = useRoute();
  const [number, setNumber] = useState(0);
  const [volume, setVolume] = useState(0);
  const {position, duration} = useProgress();
  const [id, setId] = useState(0);
  console.log(route);
  const [isPlay, setIsPlay] = useState(true);
  useEffect(() => {
    TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.reset();
      await TrackPlayer.add(props.albumMusic);
      await TrackPlayer.skip(String(route.params.item.id));
      await TrackPlayer.play();
    });
  }, []);
  useEffect(() => {
    TrackPlayer.skip(String(route.params.item.id));
    setId(route.params.item.id - 1);
  }, [route.params.item]);
  const Play = () => {
    if (!isPlay) {
      TrackPlayer.play();
      setIsPlay(true);
    } else {
      TrackPlayer.pause();
      setIsPlay(false);
    }
  };
  const Next = () => {
    TrackPlayer.skipToNext();
    setId(id + 1);
    console.log('log item2', route.params.item);
  };
  const Back = () => {
    TrackPlayer.skipToPrevious();
    if (id >= 1) {
      setId(id - 1);
    }
  };
  const Repeat = () => {
    TrackPlayer.reset();
  };
  // console.log('bai hat hien tai', route.params.item.id)
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={asset.background2}>
      <View
        style={{
          marginHorizontal: scale(20),
          marginVertical: scale(20),
          justifyContent: 'space-around',
          flex: 1,
        }}>
        <TouchableOpacity
          style={{width: scale(30), width: scale(30)}}
          onPress={() => props.navigation.goBack()}>
          <Image
            source={asset.back}
            style={{width: scale(30), width: scale(30)}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: '40%',
            borderRadius: scale(10),
            marginVertical: scale(10),
            backgroundColor: 'white',
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              // borderRadius: scale(10),
              // marginVertical: scale(10),
            }}
            resizeMode="stretch"
            source={{uri: props.albumMusic[id].image}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: scale(10),
            }}>
            <Text style={{color: 'white', fontSize: scale(12)}}>
              {position}
            </Text>
            <Text style={{color: 'white', fontSize: scale(12)}}>
              {props.albumMusic[id].time}
            </Text>
          </View>
        </View>

        <Slider
          style={{width: '100%', height: 40}}
          minimumValue={0}
          maximumValue={props.albumMusic[id].time}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={(position) => setNumber(position)}
          step={1}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <IconPlay text="redo-alt" onHandle={Repeat} />
          <IconPlay text="backward" onHandle={Back} />
          <IconPlay text={isPlay ? 'pause' : 'play'} onHandle={Play} />
          <IconPlay text="forward" onHandle={Next} />
          <IconPlay text="download" />
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: scale(24),
              color: 'white',
              fontWeight: 'bold',
            }}>
            {props.albumMusic[id].name}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: scale(20),
              color: 'white',
              fontWeight: 'normal',
            }}>
            {props.albumMusic[id].singer}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginVertical: scale(10),
            // backgroundColor:"green",
            alignItems: 'center',
          }}>
          <Icon name="volume-down" size={scale(20)} color="white" />
          <Slider
            style={{width: '85%', height: 40}}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="white"
            onValueChange={(values) => setVolume(values)}
            step={1}
          />
          <Icon name="volume-up" size={scale(20)} color="white" />
        </View>
      </View>
    </ImageBackground>
  );
};
const mapStateToProps = (state) => ({
  albumMusic: state.albumMusic,
});
const mapDispatchToProps = {
  setSaveMusicAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Playmusic);
