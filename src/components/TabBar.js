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

import Tab from './Tab';

export default class TabBar extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { initialReady: false };
    // make sure this method gets the right scope, no matter how it's called
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
          alwaysBounceHorizontal={false}
          horizontal={true}
          decelerationRate={0}
          snapToInterval={200} //your element width
          snapToAlignment={"center"}
          scrollEnabled={false}
          style={{
            height: 80,
            backgroundColor: "#09090A",
            flexDirection: "row"
          }}
        >
          <View style={{ width: 384 }}></View>
          {this.props.navigationState.routes.map((route, index) => {
            var device_width = Dimensions.get("window").width;
            let value;
            if (Platform.OS == "android") {
              value =
                534 -
                device_width / 2 -
                150 / 2 +
                this.props.navigationState.index * 150;
            } else {
              value =
                534 -
                device_width / 2 -
                150 / 2 +
                this.props.navigationState.index * 150;
            }
            InteractionManager.runAfterInteractions(() =>
              this.scrollViewRef.scrollTo({ x: value, y: 0, animated: true })
            );

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
              borderTopColor: "#D6D6D6",
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
              borderTopColor: "#D6D6D6",
              borderTopWidth: 0.5
            }}
          ></View>
        </View>
      </View>
    );
  }
}
