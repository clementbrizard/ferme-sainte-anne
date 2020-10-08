import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Deliveries } from './app/screens/index';

export default function App() {
  return (
    <PaperProvider>
      <Deliveries title='test' />
    </PaperProvider>
  );
}