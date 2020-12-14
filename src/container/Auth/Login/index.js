import React, { Component } from "react";
import { ImageBackground } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../../asset/images/background2.png")}
      ></ImageBackground>
    );
  }
}
