import React, { useState } from 'react';
import { View, FlatList, Platform, StatusBar, StyleSheet } from 'react-native';
import { Button, Card, Divider, Paragraph } from 'react-native-paper';
import { FontAwesome5, Fontisto, MaterialIcons } from '@expo/vector-icons';

const deliveries = [
  {
    id: '1',
    title: 'Titre',
    date: '10/10/20',
    categories: [{ id: '1', name: 'viande rouge' }, { id: '2', name: 'viande rouge' }, { id: '3', name: 'viande rouge' }],
    places: ['Paris 19e', 'Paris 20e', 'Rocquencourt'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '2',
    title: 'Titre',
    date: '10/10/20',
    categories: [{ id: '1', name: 'viande rouge' }, { id: '2', name: 'viande rouge' }, { id: '3', name: 'viande rouge' }],
    places: ['Paris 19e', 'Paris 20e', 'Rocquencourt'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '3',
    title: 'Titre',
    date: '10/10/20',
    categories: [{ id: '1', name: 'viande rouge' }, { id: '2', name: 'viande rouge' }, { id: '3', name: 'viande rouge' }],
    places: ['Paris 19e', 'Paris 20e', 'Rocquencourt'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '4',
    title: 'Titre',
    date: '10/10/20',
    categories: [{ id: '1', name: 'viande rouge' }, { id: '2', name: 'viande rouge' }, { id: '3', name: 'viande rouge' }],
    places: ['Paris 19e', 'Paris 20e', 'Rocquencourt'],
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
          <Card style={{ marginBottom: 10 }}>
            <Card.Title
              title={item.title}
            />
            <Card.Content>
              <Paragraph style={{paddingTop: 10}}>
                <MaterialIcons name="place" size={20} color="black" /> {item.places.join(' / ')}
              </Paragraph>
              <Paragraph>
                <Fontisto name="date" size={20} color="black" /> {item.date}
              </Paragraph> 
              <Paragraph>
              <FontAwesome5 name="shopping-basket" size={24} color="black" /> {item.categories.map(cat => cat.name).join(' / ')}
              <Paragraph/>
              </Paragraph>
              <Divider style={{marginTop: 10}}/>
              <Paragraph numberOfLines={3}>
                {item.description}
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button>Commander</Button>
            </Card.Actions>
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
    padding: 10,
    margin: 10,
  },
});