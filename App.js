import React, { Component } from "react";
import {
  Platform,
  Image,
  ImageBackground,
  Animated,
  TouchableOpacity,
  StatusBar
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from "./src/screen/HomeScreen";
import AboutScreen from "./src/screen/AboutScreen";

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
          borderBottomColor: "#6e6e6e",
          borderBottomWidth: 0.5,
          height: 70
        },
        headerTitleContainerStyle: {
          left: Platform.OS === "android" ? 0 : "-11%"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#ffffff",
          fontFamily: "Blinker-Regular",
          fontSize: 20
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
            style={{ paddingLeft: 20, }}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("./src/assets/icon/back-icon.png")}
            />
          </TouchableOpacity>
        ),
        headerTitleContainerStyle: {
          left: Platform.OS === "android" ? "8%" : "-4%",
          width: "100%"
        },
        headerStyle: {
          backgroundColor: "#09090A",
          height: 70
        },
        headerTitleStyle: {
          fontSize: 18,
          fontFamily: "Blinker-Regular"
        },
        headerRight: null
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
    console.log(Platform.OS)
  }
  render() {
    return (
      <ImageBackground
        source={require("./src/assets/app-background/background.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <StatusBar backgroundColor="#09090A" barStyle="light-content" />
        <AppContainer />
      </ImageBackground>
    );
  }
}
