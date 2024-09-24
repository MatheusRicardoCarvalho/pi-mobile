import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { AuthProvider } from './src/context/AuthContext';
import { FilterUserProvider } from './src/context/FilterUserContext';
import { AppRouter } from './src/routes';


export default function App() {

  return (
    <SafeAreaView style={styles.container} >
      <PaperProvider>
        <AuthProvider>
          <FilterUserProvider>
            <AppRouter />
          </FilterUserProvider>
        </AuthProvider>
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
});
