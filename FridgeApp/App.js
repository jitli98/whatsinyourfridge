import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RecipeDetailsScreen from "./src/screens/RecipeDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RecipeDetailsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});
