import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import RecipeSummayBox from "../components/RecipeSummaryBox";
import RecipeSubsection from "../components/RecipeSubsection";

export default class RecipeDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.summary}>
            <Image
              style={styles.mainImage}
              source={{
                uri:
                  "https://www.online-image-editor.com/online-image-editor-logo.png"
              }}
            />
            <RecipeSummayBox />
          </View>
          <View>{this.renderIngredients(this.props.ingredients)}</View>
          <View>{this.renderDirections(this.props.directions)}</View>
        </View>
      </View>
    );
  }

  renderIngredients = ingredients => {
    let ingredientBody = (
      <FlatList
        data={ingredients}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    );
    return <RecipeSubsection name="Ingredients" body={ingredientBody} />;
  };

  renderDirections = directions => {
    let directionBody = (
      <FlatList
        data={directions}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    );
    return <RecipeSubsection name="Directions" body={directionBody} />;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    backgroundColor: "#fff",
    width: "80%"
  },
  header: {
    flex: 1
  },
  body: {
    flex: 4
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  description: {
    fontSize: 24
  },
  mainImage: {
    width: 150,
    height: 150,
    backgroundColor: "red"
  },
  summary: {
    flexDirection: "row"
  }
});
