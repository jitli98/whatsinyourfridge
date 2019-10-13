import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import RecipeResults from "./src/screens/RecipeResults";
import RecipeDetails from "./src/screens/RecipeDetails";

const AppNavigator = createStackNavigator(
  {
    Results: {
      screen: RecipeResults
    },
    Details: {
      screen: RecipeDetails
    }
  },
  {
    initialRouteName: "Details"
  }
);

const App = createAppContainer(AppNavigator);

export default App;
