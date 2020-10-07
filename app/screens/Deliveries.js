import React, { useState } from 'react';
import { View, Text, FlatList, Platform, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

const deliveries = [
  {
    id: '1',
    date: 'date1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '2',
    date: 'date2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default function Deliveries () {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={deliveries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.date}</Card.Title>
            <Card.Divider />
            <Text numberOfLines={3} style={styles.paragraph}>
              {item.description}
            </Text>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ecf0f1',
  },
  flatList: {
    marginHorizontal: Platform.OS === 'web' ? 500 : 0,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#34495e',
  },
});