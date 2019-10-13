import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RecipeSummayBox from '../components/RecipeSummaryBox';

export default function RecipeDetails(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.summary}>
          <Image
            style={styles.mainImage}
            source={
              {uri: 'https://www.online-image-editor.com/online-image-editor-logo.png'}}
          />
          <RecipeSummayBox
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '80%'
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
    width: 150,
    height: 150,
    backgroundColor: 'red'
  },
  summary: {
    flexDirection: 'row'
  }
});
