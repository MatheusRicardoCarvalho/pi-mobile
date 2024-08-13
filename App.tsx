import Login from './src/screens/Login';
import { NavigationContainer } from "@react-navigation/native";
import Register from './src/screens/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRouter } from './src/routes';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <AuthProvider>
    <AppRouter />

    </AuthProvider>
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
