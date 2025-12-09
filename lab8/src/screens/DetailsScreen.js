import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const { itemId, itemName } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>

      <Text style={styles.text}>Item ID: {itemId}</Text>
      <Text style={styles.text}>Item Name: {itemName}</Text>

      <View style={{ height: 16 }} />

      <Button title="Go Back" onPress={() => navigation.goBack()} />

      <View style={{ height: 16 }} />

      <Button
        title="Change title"
        onPress={() => navigation.setParams({ itemName: 'Updated Item Name' })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default DetailsScreen;
