import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
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
  Icon
} from "react-native";

const Tab = ({ focusAnim, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: focusAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["transparent", "tomato"]
          })
        }}
      >
        <Animated.Text
          style={{
            color: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["#444", "#fff"]
            })
          }}
        >
          {title}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const TabBar = props => {
  const { navigationState, navigation, position } = props;
  return (
    <View
      style={{
        height: 80,
        backgroundColor: "#09090A",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      {navigationState.routes.map((route, index) => {
        const focusAnim = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0, 1, 0]
        });
        return (
          <Tab
            focusAnim={focusAnim}
            title={route.routeName}
            onPress={() => navigation.navigate(route.routeName)}
          />
        );
      })}
    </View>
  );
};

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
    tabBarComponent: TabBar
  }
);

export default createStackNavigator({ HomeNavigator }, { headerMode: "none" });
