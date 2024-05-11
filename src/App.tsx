import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigation} from './presentation/navigation/Navigation';

interface AppProps {}

export const App = ({}: AppProps) => {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <View
        style={{
          height: 400,
          backgroundColor: 'red',
        }}>
        <View
          style={{
            // flex: 1,
            width: 100,
            // height: 100,
            backgroundColor: 'blue',
          }}>
          <Text> Hola mundo </Text>
        </View>
      </View> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
