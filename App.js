import 'intl-pluralrules';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation';


export default function App() {
  return (
    <>
    <StatusBar translucent backgroundColor="transparent" />
  <AppNavigation />
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
