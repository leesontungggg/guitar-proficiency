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

const HomeNavigator = createMaterialTopTabNavigator({
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
});

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: "people/:name",
      navigationOptions: ({ navigation }) => ({
        title: `GUITAR PROFICIENCY TEST`,
        headerStyle: {
          backgroundColor: "#09090A"
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
        headerStyle: {
          backgroundColor: "#09090A"
        },
        headerTitleStyle: {
          fontSize: 14
        }
      })
    },
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
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
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
