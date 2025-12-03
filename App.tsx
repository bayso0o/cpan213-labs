import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Config from 'react-native-config';

import { Header } from './src/components';
import { HomeScreen } from './src/screens';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={Config.APP_NAME || 'My App'} />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
