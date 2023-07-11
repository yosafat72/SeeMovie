import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppStack } from './src/presentation/navigation/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}
