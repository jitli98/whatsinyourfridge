import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import RecipeResults from "./src/screens/RecipeResults";
import RecipeDetails from "./src/screens/RecipeDetails";
import Camera from "./src/screens/CameraScreen";

const AppNavigator = createStackNavigator(
  {
    Results: {
      screen: RecipeResults
    },
    Details: {
      screen: RecipeDetails
    },
    Camera: {
      screen: Camera
    }
  },
  {
    initialRouteName: "Results"
  }
);

const App = createAppContainer(AppNavigator);

export default App;
