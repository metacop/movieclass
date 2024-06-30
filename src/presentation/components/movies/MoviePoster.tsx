import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Navigation';

interface MoviePosterProps {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 280, width = 260}: MoviePosterProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Detail', {
          movieId: movie.id,
        })
      }
      style={({pressed}) => ({
        opacity: pressed ? 0.8 : 1,
        marginHorizontal: 7,
        paddingBottom: 20,
        paddingHorizontal: 7,
        // backgroundColor: 'red',
      })}>
      <View style={{...styles.imageContainer, width, height}}>
        <Image
          source={{
            uri: movie.poster,
          }}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    // backgroundColor: 'red',
    borderRadius: 18,
    shadowColor: 'red',

    //!Estas propiedades solo funcionan en IOS
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowOpacity: 0.4,
    // shadowRadius: 7,
    // ! esta propiedad funciona para IOS y Android. usar elevation en lugar de las anteriores
    elevation: 9,
  },
});
