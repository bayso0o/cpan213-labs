import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { globalStyles, Colors, Spacing, Fonts } from '../styles/globalStyles';
import { useContacts } from '../utils/ContactContext';
import CustomInput from '../components/common/CustomInput';
import { validateContact } from '../data/contactsData';

const AddContactScreen = ({ navigation }) => {
  const { addContact } = useContacts();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
    avatar: 'https://randomuser.me/api/portraits/lego/1.jpg', // simple default avatar
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    const { isValid, errors: validationErrors } = validateContact(form);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    try {
      await addContact(form);
      Alert.alert('Success', 'Contact added successfully');
      navigation.goBack();
    } catch (e) {
      Alert.alert('Error', 'Failed to add contact');
    }
  };

  return (
    <View style={globalStyles.screen}>
      <Text style={styles.header}>Add Contact</Text>

      <CustomInput
        label="First Name"
        value={form.firstName}
        onChangeText={text => handleChange('firstName', text)}
        error={errors.firstName}
      />
      <CustomInput
        label="Last Name"
        value={form.lastName}
        onChangeText={text => handleChange('lastName', text)}
        error={errors.lastName}
      />
      <CustomInput
        label="Email"
        value={form.email}
        onChangeText={text => handleChange('email', text)}
        error={errors.email}
        keyboardType="email-address"
      />
      <CustomInput
        label="Phone"
        value={form.phone}
        onChangeText={text => handleChange('phone', text)}
        error={errors.phone}
        keyboardType="phone-pad"
      />
      <CustomInput
        label="Company"
        value={form.company}
        onChangeText={text => handleChange('company', text)}
      />
      <CustomInput
        label="Notes"
        value={form.notes}
        onChangeText={text => handleChange('notes', text)}
        multiline
        style={styles.notesInput}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: Fonts.large,
    color: Colors.text,
    marginBottom: Spacing.lg,
    fontWeight: '700',
  },
  saveButton: {
    marginTop: Spacing.lg,
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: Colors.text,
    fontSize: Fonts.medium,
    fontWeight: '600',
  },
  notesInput: {
    height: 80,
  },
});

export default AddContactScreen;
