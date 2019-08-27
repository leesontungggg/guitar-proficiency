import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Image,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Icon
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from "./src/screen/HomeScreen";
import AboutScreen from "./src/screen/AboutScreen";
import ChordPage from "./src/page/Chord";
import ScalePage from "./src/page/Scale";
import TriadPage from "./src/page/Triad";
import ArpeggioPage from "./src/page/Arpeggio";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: "people/:name",
      navigationOptions: ({ navigation }) => ({
        headerLayoutPreset: "left",
        title: `GUITAR PROFICIENCY TEST`,
        headerStyle: {
          backgroundColor: "#09090A",
          borderBottomColor: "#f1f1f1",
          borderBottomWidth: 0.5,
          height: 70
        },
        headerTitleContainerStyle: {
          left: 0
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#ffffff"
        },
        headerRight: (
          <TouchableOpacity
            style={{ paddingRight: 15 }}
            onPress={() => navigation.navigate("About")}
          >
            <Image
              style={{ width: 28, height: 28 }}
              source={require("./src/assets/icon/info.png")}
            />
          </TouchableOpacity>
        )
      })
    },
    About: {
      screen: AboutScreen,
      path: "people/:name",
      navigationOptions: ({ navigation }) => ({
        title: `ABOUT GUITAR PROFICIENCY TEST `,
        headerLeft: (
          <TouchableOpacity
            style={{ paddingLeft: 15 }}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("./src/assets/icon/back-icon.png")}
            />
          </TouchableOpacity>
        ),
        headerTitleContainerStyle: {
          left: 50,
          right: 50
        },
        headerStyle: {
          backgroundColor: "#09090A",
          height: 70
        },
        headerTitleStyle: {
          fontSize: 14
        }
      })
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#09090A"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#ffffff"
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <ImageBackground
        source={require("./src/assets/app-background/background.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <AppContainer />
      </ImageBackground>
    );
  }
}
