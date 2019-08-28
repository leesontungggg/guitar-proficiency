import React, { Component } from "react";
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import ChordPage from "../page/Chord";
import ScalePage from "../page/Scale";
import TriadPage from "../page/Triad";
import ArpeggioPage from "../page/Arpeggio";

import TabBar from '../components/TabBar';

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
    tabBarComponent: TabBar
  }
);

export default createStackNavigator({ HomeNavigator }, { headerMode: "none" });
