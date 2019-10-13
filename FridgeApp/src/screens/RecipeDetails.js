import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function RecipeDetails(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      <View>
        <Image
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1
  },
  body: {
    flex: 4
  },
  title: {
    fontSize: 30
  },
  description: {
    fontSize: 24
  },
  mainImage: {
    width: 75,
    height: 75,
    backgroundColor: 'red'
  }
});
