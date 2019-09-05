import React, { Component } from "react";
import {
  View,
  Image,
  Animated,
  Dimensions,
  Icon,
  ScrollView,
  InteractionManager,
  Platform
} from "react-native";

import Tab from "./Tab";

export default class TabBar extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      initialReady: false,
      currentScrollX: 0,
      typeOfScroll: "momentum"
    };
    this.setScrollViewRef = this.setScrollViewRef.bind(this);
  }

  setScrollViewRef = element => {
    this.scrollViewRef = element;
  };

  render() {
    return (
      <View
        style={{
          paddingTop: 10,
          height: 80,
          backgroundColor: "#09090A",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <ScrollView
          ref={this.setScrollViewRef}
          horizontal={true}
          scrollEnabled={true}
          scrollEventThrottle={0}
          decelerationRate={0.3}
          onMomentumScrollEnd={event => {
            if (this.state.typeOfScroll === "momentum") {
              console.log("running momentum end");
              var device_width = Dimensions.get("window").width;
              if (
                event.nativeEvent.contentOffset.x >
                  534 - device_width / 2 - 150 &&
                event.nativeEvent.contentOffset.x <=
                  534 - device_width / 2 - 150 + 150
              ) {
                let value = 534 - device_width / 2 - 75;
                this.scrollViewRef.scrollTo({
                  x: value,
                  y: 0,
                  animated: true
                });
                this.props.navigation.navigate("SCALE");
              }

              if (
                event.nativeEvent.contentOffset.x > 534 - device_width / 2 &&
                event.nativeEvent.contentOffset.x <=
                  534 - device_width / 2 + 150
              ) {
                let value = 534 - device_width / 2 + 75;
                this.scrollViewRef.scrollTo({
                  x: value,
                  y: 0,
                  animated: true
                });
                this.props.navigation.navigate("CHORD");
              }

              if (
                event.nativeEvent.contentOffset.x >
                  534 - device_width / 2 + 150 &&
                event.nativeEvent.contentOffset.x <=
                  534 - device_width / 2 + 300
              ) {
                let value = 534 - device_width / 2 + 225;
                this.scrollViewRef.scrollTo({
                  x: value,
                  y: 0,
                  animated: true
                });
                this.props.navigation.navigate("TRIAD");
              }

              if (
                event.nativeEvent.contentOffset.x >
                  534 - device_width / 2 + 300 &&
                event.nativeEvent.contentOffset.x <=
                  534 - device_width / 2 + 450
              ) {
                let value = 534 - device_width / 2 + 375;
                this.scrollViewRef.scrollTo({
                  x: value,
                  y: 0,
                  animated: true
                });
                this.props.navigation.navigate("ARPEGGIO");
              }
            } else {
              console.log("change to drag");
            }
          }}
          onScroll={event => {
            var device_width = Dimensions.get("window").width;
            if (
              event.nativeEvent.contentOffset.x <=
              534 - device_width / 2 - 150
            ) {
              let value = 534 - device_width / 2 - 75;
              this.scrollViewRef.scrollTo({ x: value, y: 0, animated: false });
              this.props.navigation.navigate("SCALE");
            }

            if (
              event.nativeEvent.contentOffset.x >
              534 - device_width / 2 + 450
            ) {
              let value = 534 - device_width / 2 + 375;
              this.scrollViewRef.scrollTo({ x: value, y: 0, animated: false });
              this.props.navigation.navigate("ARPEGGIO");
            }
          }}
          // onScrollBeginDrag={() => {
          //   console.log("drag start");
          //   this.setState({ typeOfScroll: "drag" });
          // }}
          // onMomentumScrollBegin={() => {
          //   this.setState({ typeOfScroll: "momentum" });
          //   console.log("momentum begin");
          // }}
          onScrollEndDrag={event => {
            let xPosition = event.nativeEvent.contentOffset.x;

            console.log("drag end");
            var device_width = Dimensions.get("window").width;
            if (
              xPosition > 534 - device_width / 2 - 150 &&
              xPosition <= 534 - device_width / 2 - 150 + 150
            ) {
              let value = 534 - device_width / 2 - 75;
              this.scrollViewRef.scrollTo({
                x: value,
                y: 0,
                animated: true
              });
              this.props.navigation.navigate("SCALE");
            }

            if (
              xPosition > 534 - device_width / 2 &&
              xPosition <= 534 - device_width / 2 + 150
            ) {
              let value = 534 - device_width / 2 + 75;
              this.scrollViewRef.scrollTo({
                x: value,
                y: 0,
                animated: true
              });
              this.props.navigation.navigate("CHORD");
            }

            if (
              xPosition > 534 - device_width / 2 + 150 &&
              xPosition <= 534 - device_width / 2 + 300
            ) {
              let value = 534 - device_width / 2 + 225;
              this.scrollViewRef.scrollTo({
                x: value,
                y: 0,
                animated: true
              });
              this.props.navigation.navigate("TRIAD");
            }

            if (
              xPosition > 534 - device_width / 2 + 300 &&
              xPosition <= 534 - device_width / 2 + 450
            ) {
              let value = 534 - device_width / 2 + 375;
              this.scrollViewRef.scrollTo({
                x: value,
                y: 0,
                animated: true
              });
              this.props.navigation.navigate("ARPEGGIO");
            }
          }}
          style={{
            height: 80,
            backgroundColor: "#09090A",
            flexDirection: "row"
          }}
        >
          <View style={{ width: 384 }}></View>
          {this.props.navigationState.routes.map((route, index) => {
            var device_width = Dimensions.get("window").width;
            let value =
              534 -
              device_width / 2 -
              150 / 2 +
              this.props.navigationState.index * 150;

            {
              InteractionManager.runAfterInteractions(() =>
                this.scrollViewRef.scrollTo({ x: value, y: 0, animated: false })
              );
            }

            const focusAnim = this.props.position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0, 1, 0]
            });
            return (
              <Tab
                key={index}
                focusAnim={focusAnim}
                title={route.routeName}
                route={this.props.navigationState.routes}
                onPress={() => this.props.navigation.navigate(route.routeName)}
              />
            );
          })}
          <View style={{ width: 384 }}></View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: 1,
            marginBottom: "8%",
            marginTop: 10
          }}
        >
          <View
            style={{
              width: "45%",
              borderTopColor: "#6e6e6e",
              borderTopWidth: 0.5
            }}
          ></View>

          <Image
            style={{
              width: 24,
              height: 24,
              alignSelf: "center",
              bottom: "3%"
            }}
            source={require("../assets/icon/indicator.png")}
          />
          <View
            style={{
              width: "45%",
              borderTopColor: "#6e6e6e",
              borderTopWidth: 0.5
            }}
          ></View>
        </View>
      </View>
    );
  }
}
