import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import asset from '../../../asset';
import ItemInfor from '../../../components/ItemInfo';
import {scale} from '../../../components/ScaleSheet';
// import {Text, View} from 'native-base';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
    };
  }
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
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={asset.back}
              style={{width: scale(30), width: scale(30)}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: scale(20),
              color: 'white',
              fontStyle: 'italic',
              textAlign: 'center',
              marginVertical: scale(20),
            }}>
            Nói cho anh nghe điều em muốn
          </Text>
          <TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                resizeMode="cover"
                source={asset.coco}
                style={{
                  width: scale(100),
                  height: scale(100),
                  borderRadius: scale(50),
                }}
              />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: scale(20),
              color: 'white',
              fontStyle: 'italic',
              //   textAlign: 'center',
            }}>
            Thông tin cá nhân
          </Text>
          <ItemInfor
            onChangeText={(value) => {
              this.setState({name: value});
            }}
            autoCapitalize="none"
            value={this.state.name}
            source={asset.name}
            name="Họ và tên"
            txtInput
            placeholder={'Nhập tên người dùng'}
          />
          <ItemInfor
            onChangeText={(value) => {
              this.setState({phone: value});
            }}
            keyboardType={'phone-pad'}
            autoCapitalize="none"
            value={this.state.phone}
            source={asset.phone}
            name="Số điện thoại"
            txtInput
            placeholder={'Nhập số điện thoại'}
          />
          <Text
            style={{
              fontSize: scale(16),
              color: 'white',
              fontStyle: 'italic',
              // textAlign: 'center',
            }}>
            Bạn có chắc về lựa chọn của mình chứ ?
          </Text>
          <View
            style={{
              // width: '100%',
              height: scale(60),
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: scale(10),
            }}>
            <TouchableOpacity
              style={{
                width: '50%',
                height: scale(60),
                justifyContent: 'center',
              }}
              onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.text}>Trở lại</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '50%',
                height: scale(60),
                justifyContent: 'center',
              }}>
              <Text style={styles.text}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
          <Text></Text>
          <Text></Text>
        </View>
      </ImageBackground>
    );
  }
}

export default Profile;
const styles = StyleSheet.create({
  text: {
    color: 'steelblue',
    textAlign: 'center',
    fontSize: scale(16),
  },
});
