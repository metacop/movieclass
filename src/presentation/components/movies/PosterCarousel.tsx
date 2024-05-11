import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {ScrollView} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';

interface PosterCarouselProps {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel = ({movies, height = 290}: PosterCarouselProps) => {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movie={movie} />
          //   <Text key={movie.id}>{movie.title}</Text>
        ))}
      </ScrollView>
    </View>
  );
};
