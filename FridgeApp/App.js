import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RecipeDetails from './src/screens/RecipeDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <RecipeDetails
        title="Buffalo Chicken"
        description="great" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
