import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {scale} from '../ScaleSheet';

export class InputText extends Component {
  render() {
    return (
      <View style={{width: '100%', height: scale(70), marginTop:scale(20)}}>
        <Text style={{fontSize: scale(18), color: "#f8f8ff",fontStyle: "italic"}}>{this.props.title}</Text>
        <TextInput
          style={{
            width: '100%',
            height: scale(50),
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            color:"white"
          }}
          fontSize ={scale(16)}
          fontStyle ="italic"
          placeholder="Enter here"></TextInput>
      </View>
    );
  }
}
export default InputText;