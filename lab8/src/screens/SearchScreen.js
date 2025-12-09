import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Text style={styles.text}>Searching for: {searchQuery}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});

export default SearchScreen;
