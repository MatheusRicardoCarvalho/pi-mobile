import Login from './src/screens/Login';
import { NavigationContainer } from "@react-navigation/native";
import Register from './src/screens/Register';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRouter } from './src/routes';
import { AuthProvider } from './src/context/AuthContext';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { FilterUserProvider } from './src/context/FilterUserContext';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
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
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
