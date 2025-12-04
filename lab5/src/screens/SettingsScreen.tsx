import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, StyleSheet } from 'react-native';
import PlatformButton from '../components/PlatformButton';
import { getCurrentPlatformColors, isIOS } from '../utils/platform';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [location, setLocation] = useState(false);

  // base platform colors (Android vs iOS)
  const baseColors = getCurrentPlatformColors();

  // colors that actually get used on the screen
  const colors = darkMode
    ? {
        ...baseColors,
        background: '#000000',
        text: '#ffffff',
      }
    : baseColors;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Title */}
      <Text style={[styles.title, { color: colors.text }]}>
        {isIOS ? 'iOS Settings' : 'Android Settings'}
      </Text>

      {/* Section: Preferences */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        Preferences
      </Text>

      {/* Dark Mode row */}
      <View style={[styles.row, darkMode ? styles.darkRow : styles.lightRow]}>
        <Text style={[styles.label, { color: colors.text }]}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      {/* Notifications row */}
      <View style={styles.row}>
        <Text style={[styles.label, { color: colors.text }]}>
          Notifications
        </Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      {/* Location row */}
      <View style={styles.row}>
        <Text style={[styles.label, { color: colors.text }]}>
          Location Access
        </Text>
        <Switch value={location} onValueChange={setLocation} />
      </View>

      {/* Section: Buttons */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Buttons</Text>

      <View style={styles.buttonRow}>
        <PlatformButton title="Primary" onPress={() => {}} />
      </View>

      <View style={styles.buttonRow}>
        <PlatformButton
          title="Secondary"
          variant="secondary"
          onPress={() => {}}
        />
      </View>

      <View style={styles.buttonRow}>
        <PlatformButton title="Disabled" disabled onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '600',
  },
  row: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    marginBottom: 8,
  },
  lightRow: {
    backgroundColor: '#f2f2f2',
  },
  darkRow: {
    backgroundColor: '#222222',
  },
  label: {
    fontSize: 16,
  },
  buttonRow: {
    marginTop: 10,
  },
});

export default SettingsScreen;
