import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import { Ionicons, Feather } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';

import { AuthProvider } from './src/context/AuthContext';
import { FilterUserProvider } from './src/context/FilterUserContext';
import { AppRouter } from './src/routes';

// Mantenha a tela de splash visível enquanto carregamos recursos
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pré-carregue as fontes
        await Font.loadAsync({
          ...Ionicons.font,
          ...Feather.font
        });
        // Aguarde por outros recursos aqui se necessário
      } catch (e) {
        console.warn(e);
      } finally {
        // Diga à aplicação para renderizar
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      // Isso diz à tela de splash para se esconder imediatamente
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
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
