import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

interface LoadingProps {}

export const Loading = ({}: LoadingProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      {/* //! ES UN SNIPPER CARGANDO DE REACT-NATIVE */}
      <ActivityIndicator size={'large'} color={'indigo'} />
    </View>
  );
};

const styles = StyleSheet.create({});
