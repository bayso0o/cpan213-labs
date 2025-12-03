import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { globalStyles, Spacing, Colors } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Feather';

const ContactListItem = ({ contact, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[globalStyles.card, styles.row]}>
      <Image source={{ uri: contact.avatar }} style={styles.avatar} />

      <View style={styles.info}>
        <Text style={globalStyles.title}>
          {contact.firstName} {contact.lastName}
        </Text>
        <Text style={globalStyles.subtitle}>{contact.phone}</Text>
      </View>

      {contact.favorite && <Icon name="star" size={22} color={Colors.accent} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: Spacing.md,
  },
  info: {
    flex: 1,
  },
});

export default ContactListItem;
