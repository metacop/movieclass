import React, {useEffect, useState} from 'react';
import {type Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {
  movieDBFetcher,
  movieDBFetcherFetch,
} from '../../config/adapters/moviesDB.adapter';

let porpularPage = 1;

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
        //! en el primer ejemplo usamos el adaptador fetch y no axios.
        UseCases.moviesNowPlayingsUseCase(movieDBFetcherFetch),
        //! en todos estos casos usamos axios
        UseCases.moviesPopularUseCase(movieDBFetcher),
        UseCases.moviesTopRatedUseCase(movieDBFetcher),
        UseCases.moviesUpComingUseCase(movieDBFetcher),

        // * PODEMOS VER QUE VER EL PATRON ADAPTADOR SE ACOMODA A LA NECESIDAD DE CADA CASO DE USO. SIN NECISIDAD DE CAMBIAR EL CODIGO DE LOS USE-CASES
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

    //Methods
    PopularNextPage: async () => {
      porpularPage++;
      const newPopularMovies = await UseCases.moviesPopularUseCase(
        movieDBFetcher,
        {page: porpularPage},
      );
      setPopular([...popular, ...newPopularMovies]);
    },
  };
};
