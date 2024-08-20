import Login from './src/screens/Login';
import { NavigationContainer } from "@react-navigation/native";
import Register from './src/screens/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRouter } from './src/routes';
import { AuthProvider } from './src/context/AuthContext';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <PaperProvider>
        <AuthProvider>
        <AppRouter />

      </AuthProvider>
      </PaperProvider>

  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
