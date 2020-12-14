import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { scale } from "../ScaleSheet";

export default class ButtonTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          height: "10%",
          backgroundColor: "#99BDDD",
          borderRadius: 5,
          justifyContent: "center",
          marginVertical: scale(20),
        }}
      >
        <Text
          style={{ textAlign: "center", fontSize: scale(30), color: "white" }}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
