import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import asset from '../../../asset';
import {scale} from '../../../components/ScaleSheet';
import SearchForm from '../../../components/SearchForm';
import Top from '../../../components/Top';
import {dataAlbum, dataSearch} from '../../../data';
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
const renderSearch = ({item}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: scale(100),
          backgroundColor: 'white',
          // marginHorizontal: scale(10),
          borderRadius: scale(10),
          // width:200,
          marginRight: scale(10),
          backgroundColor: '#BBABCF',
          flexDirection: 'row',
        }}>
        <Image
          resizeMode="cover"
          style={{
            //   justifyContent: 'space-around',
            width: scale(100),
            height: scale(100),
            // marginLeft:scale(10),
            borderRadius: scale(10),
          }}
          source={item.img}
        />
        <View
          style={{
            justifyContent: 'center',
            marginLeft: scale(5),
            width: 100,
            height: 100,
          }}>
          <Text
            style={{
              fontSize: scale(16),
              color: 'white',
              fontStyle: 'italic',
              textAlign: 'center',
            }}>
            {item.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export class Search extends Component {
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
          <Text
            style={{
              fontSize: scale(35),
              color: 'white',
              fontStyle: 'italic',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Search
          </Text>
          <SearchForm />
          <Text
            style={{
              fontSize: scale(24),
              color: 'white',
              //   fontStyle: 'italic',
            }}>
            You might like...
          </Text>
          <FlatList
            style={{marginVertical: scale(20)}}
            data={dataSearch}
            renderItem={renderSearch}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              fontSize: scale(24),
              color: 'white',
              //   fontStyle: 'italic',
            }}>
            Recently played
          </Text>
          <FlatList
              horizontal={true}
              data={dataAlbum}
              renderItem={itemAblum}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
        </View>
      </ImageBackground>
    );
  }
}
export default Search;
