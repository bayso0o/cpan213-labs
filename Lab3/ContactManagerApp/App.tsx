import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ContactProvider } from './src/utils/ContactContext';
import HomeScreen from './src/screens/HomeScreen';
import AddContactScreen from './src/screens/AddContactScreen';
import ContactDetailsScreen from './src/screens/ContactDetailsScreen';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ContactProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddContact" component={AddContactScreen} />
          <Stack.Screen
            name="ContactDetails"
            component={ContactDetailsScreen}
          />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactProvider>
  );
}
