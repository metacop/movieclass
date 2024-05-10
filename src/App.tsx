import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Navigation } from './presentation/navigation/Navigation';

interface AppProps {

}

export const App = ({}: AppProps) => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({

});