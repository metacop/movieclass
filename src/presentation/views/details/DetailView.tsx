import {Route, RouteProp, useRoute} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../navigation/Navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/movieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {Loading} from '../../components/loaders/Loading';

//! OPCION 2
interface Props extends StackScreenProps<RootStackParamList, 'Detail'> {}

export const DetailView = ({route}: Props) => {
  //! OPCION 2

  const {movieId} = route.params;

  const {movie, isLoading, actores} = useMovie({movieId});
  //! OPCION 1
  //   const params = useRoute<RouteProp<RootStackParamList, 'Detail'>>().params;
  //   console.log(params.movieId);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <MovieHeader movie={movie!} />
      <MovieDetails movie={movie!} actores={actores!} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
