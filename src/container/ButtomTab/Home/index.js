import React, {Component} from 'react';
import asset from '../../../asset/index';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import dataAlbum from '../../../data/index';
import Feel from '../../../components/Feel';
const itemAblum = ({item}) => {
  return (
    <View
      style={{
        height: scale(180),
        width: scale(150),
        marginRight: scale(10),
        borderRadius: scale(10),
        marginVertical: scale(20),
        justifyContent: 'center',
      }}>
      <TouchableOpacity>
        <Image
          resizeMode="cover"
          style={{
            width: scale(150),
            height: scale(150),
            borderRadius: scale(10),
          }}
          source={item.img}
        />
        <Text
          style={{
            fontSize: scale(16),
            color: '#f8f8ff',
            fontStyle: 'italic',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export class Home extends Component {
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../../asset/images/background2.png')}>
        <View
          style={{
            marginHorizontal: scale(20),
            // marginVertical: scale(10),
            // justifyContent: 'space-around',
            // flex: 1,
          }}>
          <Top />
          <ScrollView>
            <Text
              style={{
                fontSize: scale(20),
                color: 'white',
                // marginVertical: scale(10),
              }}>
              Saved for later
            </Text>
            <FlatList
              horizontal={true}
              data={dataAlbum}
              renderItem={itemAblum}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
            <Text
              style={{
                fontSize: scale(20),
                color: 'white',
                // marginVertical: scale(10),
              }}>
              How you feel today ?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginVertical: scale(20),
              }}>
              <Feel uri={asset.feel1} text="Smile" />
              <Feel uri={asset.feel2} text="Surprise" />
              <Feel uri={asset.feel3} text="Sad" />
              <Feel uri={asset.feel4} text="Angry" />
            </View>
            <Feel uri={asset.feel1} text="Smile" />
              <Feel uri={asset.feel2} text="Surprise" />
              <Feel uri={asset.feel3} text="Sad" />
              <Feel uri={asset.feel4} text="Angry" /><Feel uri={asset.feel1} text="Smile" />
              <Feel uri={asset.feel2} text="Surprise" />
              <Feel uri={asset.feel3} text="Sad" />
              <Feel uri={asset.feel4} text="Angry" /><Feel uri={asset.feel1} text="Smile" />
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
export default Home;
