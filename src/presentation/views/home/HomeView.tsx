import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useMovies } from '../../hooks/useMovies';

interface HomeViewProps {

}

export const HomeView = ({}: HomeViewProps) => {
    const {} = useMovies();
    return (
        <View>
            <Text>Home View</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});