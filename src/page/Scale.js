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
const ScaleConfig = require("../config/scale.json");

export default class ScalePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { currentScale: this.generateNewScale() };
  }

  getRandomArrayElement = arr => {
    var min = 0;
    var max = arr.length - 1;
    var randIndex = Math.floor(Math.random() * (max - min)) + min;
    return arr[randIndex];
  };

  generateNewScale = () => {
    let rootScaleArray = Object.keys(ScaleConfig.Root);
    let qualityScaleArray = Object.keys(ScaleConfig.Quality);
    console.log(ScaleConfig.Quality);

    let randomScale =
      this.getRandomArrayElement(rootScaleArray) +
      " " +
      this.getRandomArrayElement(qualityScaleArray);
    return randomScale;
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
            style={{ fontSize: 40, color: "#ffffff", fontFamily: "Blinker" }}
          >
            {this.state.currentScale}
          </Text>
        </ImageBackground>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: "10%",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            height: 44,
            backgroundColor: "#c22700"
          }}
          onPress={() => {
            this.setState({ currentScale: this.generateNewScale() });
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontFamily: "Blinker"
            }}
          >
            GENERATE
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
