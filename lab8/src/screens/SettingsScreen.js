import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // choose styles based on dark mode
  const containerStyle = [
    styles.container,
    darkModeEnabled ? styles.containerDark : styles.containerLight,
  ];

  const textStyle = [
    styles.settingText,
    darkModeEnabled ? styles.textDark : styles.textLight,
  ];

  const titleStyle = [
    styles.title,
    darkModeEnabled ? styles.textDark : styles.textLight,
  ];

  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Settings Screen</Text>

      <View style={styles.settingRow}>
        <Text style={textStyle}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={textStyle}>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={setDarkModeEnabled} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  // light & dark backgrounds
  containerLight: {
    backgroundColor: '#ffffff',
  },
  containerDark: {
    backgroundColor: '#121212',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  // base text + light/dark variants
  settingText: {
    fontSize: 16,
  },
  textLight: {
    color: '#000000',
  },
  textDark: {
    color: '#ffffff',
  },
});

export default SettingsScreen;
