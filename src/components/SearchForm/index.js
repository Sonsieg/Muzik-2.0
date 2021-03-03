import React, {Component} from 'react';
import {Image, TextInput, View} from 'react-native';
import asset from '../../asset';
import {scale} from '../ScaleSheet';

export class SearchForm extends Component {
  render() {
    return (
      <View
        style={{
          height: scale(60),
          //   marginHorizontal: scale(20),
          //   borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'white',
          borderRadius: scale(30),
          marginVertical: scale(20),
        }}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            style={{width: scale(30), height: scale(30), alignItems: 'center'}}
            source={asset.search}
          />
          <TextInput
            style={{width: '80%'}}
            fontSize={scale(16)}
            fontStyle="italic"
            placeholder="Artists, songs, or podcasts"
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{
              width: scale(30),
              height: scale(30),
              marginRight: scale(20),
            }}
            source={asset.mic}
          />
        </View>
      </View>
    );
  }
}
export default SearchForm;
