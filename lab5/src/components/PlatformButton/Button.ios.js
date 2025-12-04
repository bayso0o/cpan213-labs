import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getCurrentPlatformColors } from '../../utils/platform';

const IOSButton = ({ title, variant = 'primary', onPress, disabled }) => {
  const colors = getCurrentPlatformColors();
  const isSecondary = variant === 'secondary';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: isSecondary ? colors.background : colors.primary,
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
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12, // big iOS-style corners
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default IOSButton;
