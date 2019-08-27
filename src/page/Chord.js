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
const ChordConfig = require("../config/chord.json");


export default class ChordPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { currentChord: this.generateNewChord() };
  }

  getRandomArrayElement = arr => {
    var min = 0;
    var max = arr.length - 1;
    var randIndex = Math.floor(Math.random() * (max - min)) + min;
    return arr[randIndex];
  };

  generateNewChord = () => {
    let rootChordArray = Object.keys(ChordConfig.Root);
    let qualityChordArray = Object.keys(ChordConfig.Quality);

    let randomChord =
      this.getRandomArrayElement(rootChordArray) + 
      this.getRandomArrayElement(qualityChordArray);
    return randomChord;
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
          <Text style={{ fontSize: 40, color: "#ffffff" }}>
            {this.state.currentChord}
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
              this.setState({ currentChord: this.generateNewChord() });
            }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontWeight: "bold"
            }}
           
          >
            GENERATE
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
