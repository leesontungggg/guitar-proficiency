import React, { Component } from "react";
import { Text, View, Animated, TouchableOpacity } from "react-native";

// export default class Tab extends Component<Props> {
//   setDestinationViewRef = element => {
//     this.destinationViewRef = element;
//   };

//   render() {
//     return (
//       <TouchableOpacity
//         onTouchStart={e => {
//           consol.log("touchMove", e.nativeEvent);
//         }}
//         onPress={this.props.onPress}
//       >
//         <Animated.View
//           style={{
//             width: 150,
//             borderRadius: 10,
//             backgroundColor: "#09090A",
//             alignItems: "center"
//           }}
//         >
//           <Animated.Text
//             style={{
//               color: this.props.focusAnim.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: ["#fff", "#A92411"]
//               }),
//               fontSize: 18,
//               fontFamily: "Blinker-SemiBold"
//             }}
//           >
//             {this.props.title}
//           </Animated.Text>
//         </Animated.View>
//       </TouchableOpacity>
//     );
//   }
// }

const Tab = ({ focusAnim, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: focusAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["transparent", "#A92411"]
          })  
        }}
      >
        <Animated.Text
          style={{
            color: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["#fff", "#fff"]
            }),
            fontSize: 17,
            fontFamily: "Blinker-Bold"
          }}
        >
          {title}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Tab;
