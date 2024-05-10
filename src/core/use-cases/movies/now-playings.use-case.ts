import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {type NowPlayingResponse} from '../../../infrastructure/interfaces/now-playins.use-case';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {type Movie} from '../../entities/movie.entity';

//! se podria usar function factory. una funcion generadora. porque se esta repitiendo el mismo codigo en los 3 use-cases. entonces se podria hacer una funcion que reciba el endpoint y retorne una funcion que reciba el fetcher y retorne una promesa de tipo Movie[]
export const moviesNowPlayingsUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('now_playing');

    // const peliculas:
    // console.log({nowPlaying});

    if (nowPlaying.results) {
      return nowPlaying.results.map(MovieMapper.fromMovieDBToMovieToEntity);
    } else {
      console.log('No se encontraron peliculas');
      throw new Error('No se encontraron peliculas');
    }

    return [];
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - Now Playing');
  }
};
