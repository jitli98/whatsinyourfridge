import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RecipeSubsection({name, body}) {
  return (
    <View>
      <Text style={styles.header}>{name}</Text>
      {body}
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold'
  }
});
