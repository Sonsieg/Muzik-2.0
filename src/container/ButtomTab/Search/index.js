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
import Edit from '../../../components/Edit';
import {scale} from '../../../components/ScaleSheet';
import SearchForm from '../../../components/SearchForm';
import Top from '../../../components/Top';
import {dataAlbum, dataSearch} from '../../../data';
export class Search extends Component {
  itemAblum = ({item}) => {
    return (
      <View
        style={{
          height: scale(180),
          width: scale(150),
          borderRadius: scale(10),
          marginTop: scale(20),
          justifyContent: 'space-around',
          marginHorizontal: scale(10),
          // backgroundColor:'yellow'
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
  renderSearch = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Playmusic')}>
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
            justifyContent: 'space-evenly',
            marginBottom: scale(20),
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
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={asset.background2}>
        <View
          style={{
            marginHorizontal: scale(20),
            // marginVertical: scale(10),
            justifyContent: 'space-around',
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
          <Edit text="Danh sách nhạc yêu thích" />
          <Edit text="Lắng nghe bản nhạc của bạn" />
          <Text
            style={{
              fontSize: scale(24),
              color: 'white',
              //   fontStyle: 'italic',
              marginTop: scale(24),
            }}>
            Recently played
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={dataAlbum}
            renderItem={this.itemAblum}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            // style={{backgroundColor:'red'}}
          />
        </View>
      </ImageBackground>
    );
  }
}
export default Search;
