import React, { Component } from 'react';
import { FlatList, View, TouchableHighlight } from 'react-native';
import Button from '../components/Button';

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
	static navigationOptions = {title: 'Results'};

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
	}

	render() {
		return (
			<View>
				<FlatList
					data={recipeData}
					keyExtractor={this._keyExtractor}
					renderItem={this._renderItem}
				/>
			</View>
		);
	}
}

export default RecipeResults;
