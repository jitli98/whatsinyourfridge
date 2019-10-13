import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "app/src/constants.js";

export default function RecipeSummayBox(props) {
  let data = [['Prep', props.prepTime],
              ['Servings', props.servings]];
  return (
    <View style={styles.container}>
      <InfoMessage infoType='Prep' information={props.prepTime}/>
    </View>
  );
}

function InfoMessage({infoType, information}) {
  return (
    <View style={styles.infoMessage}>
      <Text style={styles.infoType}>{infoType}:</Text>
      <Text>{information}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: COLORS.summary,
    borderWidth: 1,
    margin: 2,
    flexDirection: 'row'
  },
  infoMessage: {
    margin: 4
  },
  infoType: {
    fontWeight: 'bold'
  }
});
