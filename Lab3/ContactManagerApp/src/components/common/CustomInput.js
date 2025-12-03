import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { globalStyles, Colors } from '../../styles/globalStyles';

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  style,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={globalStyles.subtitle}>{label}</Text>}

      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Colors.muted}
        onChangeText={onChangeText}
        style={[
          globalStyles.input,
          error ? globalStyles.inputError : null,
          style,
        ]}
        {...rest}
      />

      {error && <Text style={globalStyles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
});

export default CustomInput;
