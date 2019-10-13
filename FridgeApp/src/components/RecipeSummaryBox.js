import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "app/src/constants.js";

export default function RecipeSummayBox(props) {
  return (
    <View style={styles.container}>
      <Text>Summary</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: COLORS.summary,
    borderWidth: 1
  }
});
