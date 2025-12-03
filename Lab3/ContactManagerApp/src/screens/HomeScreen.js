import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useContacts } from '../utils/ContactContext';
import { globalStyles, Colors, Spacing, Fonts } from '../styles/globalStyles';
import ContactListItem from '../components/common/ContactListItem';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = ({ navigation }) => {
  const { contacts, loading } = useContacts();
  const [searchTerm] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const lower = searchTerm.toLowerCase();

    if (!searchTerm.trim()) {
      setFiltered(contacts);
      return;
    }

    const results = contacts.filter(
      c =>
        `${c.firstName} ${c.lastName}`.toLowerCase().includes(lower) ||
        c.email.toLowerCase().includes(lower) ||
        c.phone.toLowerCase().includes(lower),
    );

    setFiltered(results);
  }, [contacts, searchTerm]);

  if (loading) {
    return (
      <View style={globalStyles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Loading contacts...</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.screen}>
      {/* Title */}
      <Text style={styles.header}>Contacts</Text>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={18} color={Colors.muted} />
        <Text
          style={styles.searchInput}
          onPress={() => navigation.navigate('Search')}
        >
          Search contacts...
        </Text>
      </View>

      {/* Contact List */}
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ContactListItem
            contact={item}
            onPress={() =>
              navigation.navigate('ContactDetails', { contactId: item.id })
            }
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No contacts found.</Text>
        }
      />

      {/* Add Contact Floating Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddContact')}
      >
        <Icon name="plus" size={28} color={Colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: Fonts.xlarge,
    color: Colors.text,
    marginBottom: Spacing.md,
    fontWeight: '700',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: 12,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchInput: {
    marginLeft: Spacing.sm,
    color: Colors.muted,
    fontSize: Fonts.medium,
  },
  emptyText: {
    color: Colors.muted,
    textAlign: 'center',
    marginTop: Spacing.lg,
  },
  loadingText: {
    color: Colors.muted,
    marginTop: Spacing.sm,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: Colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default HomeScreen;
