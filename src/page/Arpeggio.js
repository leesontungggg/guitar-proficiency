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
const ArpeggioConfig = require("../config/arpeggio.json");

export default class ArpeggioPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { currentArpeggio: this.generateNewArpeggio() };
  }

  getRandomArrayElement = arr => {
    var min = 0;
    var max = arr.length - 1;
    var randIndex = Math.floor(Math.random() * (max - min)) + min;
    return arr[randIndex];
  };

  generateNewArpeggio = () => {
    let rootArpeggioArray = Object.keys(ArpeggioConfig.Root);
    let qualityArpeggioArray = Object.keys(ArpeggioConfig.Quality);

    let randomArpeggio =
      this.getRandomArrayElement(rootArpeggioArray) +
      this.getRandomArrayElement(qualityArpeggioArray);
    return randomArpeggio;
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/app-background/background.png")}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          paddingBottom: "25%"
        }}
      >
        <ImageBackground
          source={require("../assets/icon/center-icon.png")}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 270,
            height: 270,
            fontSize: 40,
            color: "#ffffff"
          }}
        >
          <Text
            style={{ fontSize: 45, color: "#ffffff", fontFamily: "Blinker-Bold" }}
          >
            {this.state.currentArpeggio}
          </Text>
        </ImageBackground>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: "10%",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            height: 50,
            backgroundColor: "#c22700"
          }}
          onPress={() => {
            this.setState({ currentArpeggio: this.generateNewArpeggio() });
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontFamily: "Blinker-Regular"
            }}
          >
            GENERATE
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
