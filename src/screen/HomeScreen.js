import React, { Component } from "react";
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import ChordPage from "../page/Chord";
import ScalePage from "../page/Scale";
import TriadPage from "../page/Triad";
import ArpeggioPage from "../page/Arpeggio";

import TabBar from "../components/TabBar";

const HomeNavigator = createMaterialTopTabNavigator(
  {
    SCALE: {
      screen: ScalePage
    },
    CHORD: {
      screen: ChordPage
    },
    TRIAD: {
      screen: TriadPage
    },
    ARPEGGIO: {
      screen: ArpeggioPage
    }
  },
  {
    // tabBarComponent: TabBar
    tabBarOptions: {
      activeTintColor: "#A92411",
      inactiveTintColor: "#ffffff",
      style: {
        backgroundColor: "#09090A",
        borderBottomColor: "#6e6e6e",
        borderWidth: 0.5
      },
      tabStyle: {
        padding: 0,
        paddingTop: 5,
        paddingBottom: 5,
      },
      labelStyle: {
        fontFamily: "Blinker-SemiBold",
        fontSize: 16,
      },
      indicatorStyle: {
        backgroundColor: "#A92411",
        height: 4
      }
    }
  }
);

export default createStackNavigator({ HomeNavigator }, { headerMode: "none" });
