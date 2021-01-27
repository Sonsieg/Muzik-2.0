import React, {Component, useState} from 'react';
import {Image, Text, View} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import asset from '../../../asset';
import IconPlay from '../../../components/IconPlay';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import Slider from '@react-native-community/slider';
import {useRoute} from '@react-navigation/native';
// import React from 'react'

const Playmusic = () => {
  const route = useRoute();
  const [number, setNumber] = useState(0);
  console.log(route)
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
          source={{uri: route.params.item.image}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: scale(10),
          }}>
          <Text style={{color: 'white', fontSize: scale(12)}}>00.00</Text>
          <Text style={{color: 'white', fontSize: scale(12)}}>{number}</Text>
        </View>
        <Slider
          style={{width: '100%', height: 40}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={(values) => setNumber(values)}
          step={1}
        />
        <IconPlay />
      </View>
    </ImageBackground>
  );
};

export default Playmusic;

// export default class Playmusic extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       number: 0,
//     }
//   }
//   render() {
//     const params = this.props.navigation.state ? this.props.navigation.state.params : {};
//     const itemId = params ? params.itemId : null;
//     const otherParam = params ? params.otherParam : null;
//     return (
//       <ImageBackground
//         style={{width: '100%', height: '100%'}}
//         source={asset.background2}>
//         <View
//           style={{
//             marginHorizontal: scale(20),
//             // marginVertical: scale(10),
//             // justifyContent: 'space-around',
//             flex: 1,
//           }}>
//           <Top />
//           {/* <Image
//             style={{
//               width: '100%',
//               height: '50%',
//               borderRadius: scale(10),
//               marginVertical: scale(10),
//             }}
//             resizeMode="cover"
//             source={{uri: item.image}}
//           />
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               marginVertical: scale(10),
//             }}>
//             <Text style={{color: 'white', fontSize: scale(12)}}>00.00</Text>
//           <Text style={{color: 'white', fontSize: scale(12)}}>{this.state.number}</Text>
//           </View>
//           <Slider
//             style={{width: "100%", height: 40}}
//             minimumValue={0}
//             maximumValue={100}
//             minimumTrackTintColor="#FFFFFF"
//             maximumTrackTintColor="#000000"
//             onValueChange={(values)=>this.setState({number: values})}
//             step={1}
//           /> */}
//           <Text>{JSON.stringify(params)}</Text>
//           <IconPlay />
//         </View>
//       </ImageBackground>
//     );
//   }
// }
