import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Icon
} from "react-native";

export default class ArpeggioPage extends Component<Props> {
  render() {
    return (
        <ImageBackground
        source={require('../assets/app-background/background.png')}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent"
          }}
        >
          <Text style={{fontSize:40,
          color:'#ffffff'}}>Scale Page</Text>
        </ImageBackground>
    );
  }
}
