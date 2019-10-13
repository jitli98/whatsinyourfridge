import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RecipeSubsection({name, body}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      {body}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    margin: 4
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 8,
    marginTop: 8
  }
});
