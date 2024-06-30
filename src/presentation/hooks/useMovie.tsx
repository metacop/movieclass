import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getMovieByIdUseCase} from '../../core/use-cases/movie/get-by-id.use-case';
import {movieDBFetcher} from '../../config/adapters/moviesDB.adapter';
import {Actor, FullMovie} from '../../core/entities/movie.entity';
import {getActoresMovieIDUseCase} from '../../core/use-cases/movie/get-actors.use-case';

interface useMovieProps {
  movieId: number;
}

export const useMovie = ({movieId}: useMovieProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie | undefined>(undefined);
  const [actores, setActores] = useState<Actor[] | undefined>(undefined);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = getMovieByIdUseCase(movieDBFetcher, movieId);
    const actoresPromise = getActoresMovieIDUseCase(movieDBFetcher, movieId);

    const [fullMovie, actores] = await Promise.all([fullMoviePromise, actoresPromise]);
    setMovie(fullMovie);
    setActores(actores);
    setIsLoading(false);
    //! podemos agregar un try catch para manejar errores. en caso de alguna de las promesas falla
    // console.log({fullMovie});
  };

  return {
    isLoading,
    movie,
    actores,
  };
};
