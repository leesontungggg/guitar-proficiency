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
const TriadConfig = require("../config/triad.json");

export default class TriadPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { currentTriad: this.generateNewTriad() };
  }

  getRandomArrayElement = arr => {
    var min = 0;
    var max = arr.length - 1;
    var randIndex = Math.floor(Math.random() * (max - min)) + min;
    return arr[randIndex];
  };

  generateNewTriad = () => {
    let rootTriadArray = Object.keys(TriadConfig.Root);
    let qualityTriadArray = Object.keys(TriadConfig.Quality);

    let randomTriad =
      this.getRandomArrayElement(rootTriadArray) +
      this.getRandomArrayElement(qualityTriadArray);
    return randomTriad;
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
            {this.state.currentTriad}
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
            this.setState({ currentTriad: this.generateNewTriad() });
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
