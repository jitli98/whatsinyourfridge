import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class RecipeResults extends Component {
	static navigationOptions = {title: 'Results'};

	render() {
		return (
			<View>
				<View>
					<Text>pictures</Text>
				</View>
				<View>
					<Text style={styles.title}>Buffalo Chicken Skillet</Text>
					<Text style={styles.description}>Both simple and amazing, this is a family favorite!</Text>
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
