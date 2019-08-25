import React, { Component } from "react";
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import ChordPage from "../page/Chord";
import ScalePage from "../page/Scale";
import TriadPage from "../page/Triad";
import ArpeggioPage from "../page/Arpeggio";

import {
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Dimensions,
  Icon,
  ScrollView
} from "react-native";

class Tab extends Component<Props> {
  handlePress = () => {
    var device_width = Dimensions.get("window").width;
    console.log(device_width);
    let a = (96 - device_width)/2 + this.props.currentPosition*150;
    this.props.onPress(a);
    console.log(a)
  };
  setDestinationViewRef = element => {
    this.destinationViewRef = element;
  };

  render() {
    return (
      <TouchableOpacity
        onTouchStart={e => {
          consol.log("touchMove", e.nativeEvent);
        }}
        onPress={this.handlePress}
      >
        <Animated.View
          style={{
            width: 150,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#09090A"
          }}
        >
          <Animated.Text
            style={{
              color: this.props.focusAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["#fff", "#A92411"]
              }),
              fontSize: 20
            }}
          >
            {this.props.title}
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

class TabBar extends Component<Props> {
  setScrollViewRef = element => {
    this.scrollViewRef = element;
  };

  handleTabPress = (routeName, position) => {
    this.scrollViewRef.scrollTo({ x: position, y: 0, animated: true });
    this.props.navigation.navigate(routeName);
  };

  render() {
    return (
      <View
        style={{
          height: 80,
          backgroundColor: "#09090A",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center"
          // borderTopColor: "#D6D6D6",
          // borderTopWidth: 0.5,
        }}
      >
        <ScrollView
          ref={this.setScrollViewRef}
          alwaysBounceHorizontal={false}
          horizontal={true}
          decelerationRate={0}
          snapToInterval={200} //your element width
          snapToAlignment={"center"}
          style={{
            height: 80,
            backgroundColor: "#09090A",
            flexDirection: "row"
            // borderTopColor: "#D6D6D6",
            // borderTopWidth: 0.5,
            // borderBottomColor: "#D6D6D6",
            // borderBottomWidth: 0.5,
          }}
        >
          {this.props.navigationState.routes.map((route, index) => {
            console.log(this.props.navigationState.routes);
            const focusAnim = this.props.position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0, 1, 0]
            });
            return (
              <Tab
                focusAnim={focusAnim}
                title={route.routeName}
                route={this.props.navigationState.routes}
                currentPosition={index}
                onPress={position =>
                  this.handleTabPress(route.routeName, position)
                }
              />
            );
          })}
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

const HomeNavigator = createMaterialTopTabNavigator(
  {
    Scale: {
      screen: ScalePage
    },
    Chord: {
      screen: ChordPage
    },
    Triad: {
      screen: TriadPage
    },
    Arpeggio: {
      screen: ArpeggioPage
    }
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      scrollEnabled: true,
      inactiveTintColor: "#ffffff",
      activeTintColor: "#c22700",
      labelStyle: {
        fontSize: 15
      },
      style: {
        paddingLeft: "30%",
        backgroundColor: "#09090A"
      },
      indicatorStyle: {
        backgroundColor: "#c22700"
      }
    }
  }
);

export default createStackNavigator({ HomeNavigator }, { headerMode: "none" });
