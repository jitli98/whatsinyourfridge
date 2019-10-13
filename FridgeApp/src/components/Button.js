import React, { Component } from 'react';
import { Image, View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const Button = props => {
	const { title, description, ingredients } = props.data;

	const _onPress = () => {
		props.onPress(props.data);
	}

	return (
		<View>
			<TouchableHighlight onPress={_onPress}>
				<View style={styles.container}>
					<View style={styles.imageContainer}>
						<Image
							style={{height: 50, width: 50}}
							source={{
								uri:
									"https://www.online-image-editor.com/online-image-editor-logo.png"
							}}
						/>
					</View>
					<View>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.description}>{description}</Text>
						<Text>{ingredients}</Text>
					</View>
				</View>
			</TouchableHighlight>
			<View style={styles.separator}>
			</View>
		</View>
	);
}

export default Button;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
	},
	imageContainer: {
		padding: 10,
	},
	title: {
		fontSize: 20,
	},
	description: {
		fontSize: 15,
	},
	separator: {
		height: 1,
		width: '100%',
		backgroundColor: '#777777',
	},
});
