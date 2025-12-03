import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useContacts } from '../utils/ContactContext';
import { globalStyles, Colors, Spacing, Fonts } from '../styles/globalStyles';
import CustomInput from '../components/common/CustomInput';
import ContactListItem from '../components/common/ContactListItem';

const SearchScreen = ({ navigation }) => {
  const { contacts } = useContacts();
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(contacts);

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

  return (
    <View style={globalStyles.screen}>
      <Text style={styles.header}>Search Contacts</Text>

      <CustomInput
        label="Search"
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Name, email, or phone"
      />

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
          <Text style={styles.emptyText}>No contacts match your search.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: Fonts.large,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  emptyText: {
    marginTop: Spacing.lg,
    textAlign: 'center',
    color: Colors.muted,
    fontSize: Fonts.medium,
  },
});

export default SearchScreen;
