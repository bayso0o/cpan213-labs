import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import SettingsScreen from './src/screens/SettingsScreen';
import { getCurrentPlatformColors } from './src/utils/platform';

const App = () => {
  const colors = getCurrentPlatformColors();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar barStyle="dark-content" />
      <SettingsScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
