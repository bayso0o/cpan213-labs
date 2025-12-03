import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useContacts } from '../utils/ContactContext';
import { globalStyles, Colors, Spacing, Fonts } from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/Feather';

const ContactDetailsScreen = ({ route, navigation }) => {
  const { contactId } = route.params;
  const { contacts, deleteContact } = useContacts();

  const contact = contacts.find(c => c.id === contactId);

  if (!contact) {
    return (
      <View style={globalStyles.centered}>
        <Text>Contact not found.</Text>
      </View>
    );
  }

  const handleDelete = () => {
    Alert.alert(
      'Delete Contact',
      'Are you sure you want to delete this contact?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteContact(contact.id);
            navigation.goBack();
          },
        },
      ],
    );
  };

  return (
    <View style={globalStyles.screen}>
      <Text style={styles.header}>
        {contact.firstName} {contact.lastName}
      </Text>

      <View style={styles.row}>
        <Icon name="mail" size={20} color={Colors.muted} />
        <Text style={styles.value}>{contact.email}</Text>
      </View>

      <View style={styles.row}>
        <Icon name="phone" size={20} color={Colors.muted} />
        <Text style={styles.value}>{contact.phone}</Text>
      </View>

      <View style={styles.row}>
        <Icon name="briefcase" size={20} color={Colors.muted} />
        <Text style={styles.value}>{contact.company}</Text>
      </View>

      <View style={styles.row}>
        <Icon name="file-text" size={20} color={Colors.muted} />
        <Text style={styles.value}>{contact.notes || 'No notes'}</Text>
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteText}>Delete Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: Fonts.large,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  value: {
    marginLeft: Spacing.md,
    fontSize: Fonts.medium,
    color: Colors.text,
  },
  deleteButton: {
    marginTop: Spacing.xl,
    backgroundColor: Colors.error,
    paddingVertical: Spacing.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteText: {
    color: Colors.text,
    fontSize: Fonts.medium,
    fontWeight: '600',
  },
});

export default ContactDetailsScreen;
