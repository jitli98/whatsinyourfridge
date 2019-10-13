import React, { Component } from 'react';
import { FlatList, View, TouchableHighlight, Text } from 'react-native';
import Button from '../components/Button';
import { BACKEND_URL } from '../constants';

const recipeData = [
		{
			title: "Buffalo Chicken",
			description: "great",
			ingredients: "onions, garlic",
		},
		{
			title: "Brownies",
			description: "has chocolate",
			ingredients: "chocolate",
		},
	];


class RecipeResults extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true, data: null };
		this.fetchResults;
	}

	static navigationOptions = {title: "Recipes"};

	fetchResults = async () => {
		const recipes = await fetch(`${BACKEND_URL}/recipe`)
		const recipeJson = await recipes.json();
		console.log(recipeJson);
		this.setState({
			isLoading: false,
			data: recipeJson
		});
	}

	_keyExtractor = (item, index) => index.toString();

	_renderItem = ({item, index}) => {
		return (
			<Button
				onPress={this._onPress}
				data={item}
			/>
		);
	};

	_onPress = item => {
		console.log(item);
		this.props.navigation.navigate(
			'Details', {item: item}
		);
	}

	render() {
		return (
			<View>
				{this.state.isLoading ? <View>
					<Text>Finding recipes</Text>
				</View>
				:
				<View>
				<FlatList
					data={recipeData}
					keyExtractor={this._keyExtractor}
					renderItem={this._renderItem}
				/>
				</View>}
			</View>
		);
	}
}

export default RecipeResults;
