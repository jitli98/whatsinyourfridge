import React from "react";
import { Text } from "react-native";
import RecipeDetailsView from "../components/RecipeDetailsView";
import { BACKEND_URL } from "../constants.js";

export default class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ingredients: null
    };

    this.getIngredients();
  }

  render() {
    if (this.state.isLoading) {
      return <Text>Loading...</Text>;
    } else {
      return (
        <RecipeDetailsView
          title="Buffalo Chicken"
          description="great"
          ingredients={this.state.ingredients}
          directions={["put stuff in oven", "take out of oven"]}
        />
      );
    }
  }

  getIngredients = async () => {
    const resp = await fetch(`${BACKEND_URL}/ingredient`);
    const ingredientJson = await resp.json();
    this.setState({
      isLoading: false,
      ingredients: ingredientJson.data.ingredients.map(i => i.name)
    });
  };
}
