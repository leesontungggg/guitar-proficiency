import React, { Component } from "react";
import { Text, View, Animated, TouchableOpacity } from "react-native";

export default class Tab extends Component<Props> {
  setDestinationViewRef = element => {
    this.destinationViewRef = element;
  };

  render() {
    return (
      <TouchableOpacity
        onTouchStart={e => {
          consol.log("touchMove", e.nativeEvent);
        }}
        onPress={this.props.onPress}
      >
        <Animated.View
          style={{
            width: 150,
            borderRadius: 10,
            backgroundColor: "#09090A",
            alignItems: "center"
          }}
        >
          <Animated.Text
            style={{
              color: this.props.focusAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["#fff", "#A92411"]
              }),
              fontSize: 18,
              fontFamily: "Blinker-SemiBold"
            }}
          >
            {this.props.title}
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
