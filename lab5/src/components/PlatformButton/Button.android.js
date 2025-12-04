import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getCurrentPlatformColors } from '../../utils/platform';

const AndroidButton = ({ title, variant = 'primary', onPress, disabled }) => {
  const colors = getCurrentPlatformColors();
  const isSecondary = variant === 'secondary';

  const label = title ? title.toUpperCase() : '';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: isSecondary ? '#ffffff' : colors.primary,
          borderWidth: isSecondary ? 1 : 0,
          borderColor: colors.primary,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: isSecondary ? colors.primary : '#ffffff' },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4, // smaller Android-style corners
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Android uses elevation instead of shadow
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export default AndroidButton;
