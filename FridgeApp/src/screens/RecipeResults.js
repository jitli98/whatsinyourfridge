import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class RecipeResults extends Component {
	static navigationOptions = {title: 'Results'};

	render() {
		return (
			<View>
				<View>
					<Text>picture</Text>
				</View>
				<View>
					<Text style={styles.title}>Buffalo Chicken</Text>
					<Text style={styles.description}>great</Text>
					<Text>green onions, garlic</Text>
					<Text>put stuff in oven, take out of oven</Text>
				</View>
			</View>
		);
	}
}

export default RecipeResults;

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
	},
	description: {
		fontSize: 10,
	},
});
