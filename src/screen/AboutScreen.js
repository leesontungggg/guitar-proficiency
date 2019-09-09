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

export default class AboutScreen extends Component<Props> {
  render() {
    return (
      <ImageBackground
        source={require("../assets/app-background/about-background.jpg")}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "25%"
        }}
      >
        <Image
          source={require("../assets/icon/logo-red.png")}
          style={{ width: 70, height: 70 }}
        />
        <Text
          style={{
            marginTop: 24,
            textAlign: "center",
            width: "70%",
            color: "white",
            fontFamily: "Blinker-Regular",
            lineHeight: 20,
            fontSize: 16,
          }}
        >
          Guitar Proficiency Test is an application developed by Designveloper, where
          guitar players use for quizzing themeselves on fretboard knowledge. This app was designed based on Berklee curriculum.
        </Text>
        <Text
          style={{
            marginTop: 12,
            textAlign: "center",
            width: "70%",
            color: "white",
            fontFamily: "Blinker-Regular",
            fontSize: 16,
          }}
        >
          Version 0.1
        </Text>
      </ImageBackground>
    );
  }
}
