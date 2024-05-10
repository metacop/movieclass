import React, {useEffect, useState} from 'react';
import {type Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/moviesDB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  //! se podria memoizar esta funcion para evitar que se renderize/o re construya cada vez que se renderiza el componente
  const initialLoad = async () => {
    // const nowPlayingMovies = await UseCases.moviesNowPlayingsUseCase(movieDBFetcher);

    //setnowPlaying(nowPlayingMovies);

    //setIsLoading(false);
    // console.log(nowPlayingMovies[0])

    const [nowPlayingMovies, PopularMovies, TopMovies, ComingMovies] =
      await Promise.all([
        UseCases.moviesNowPlayingsUseCase(movieDBFetcher),
        UseCases.moviesPopularUseCase(movieDBFetcher),
        UseCases.moviesTopRatedUseCase(movieDBFetcher),
        UseCases.moviesUpComingUseCase(movieDBFetcher),
      ]);

    setnowPlaying(nowPlayingMovies);
    setPopular(PopularMovies);
    setTopRated(TopMovies);
    setUpComing(ComingMovies);
    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upComing,
  };
};
