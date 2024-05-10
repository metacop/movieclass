import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {type NowPlayingResponse} from '../../../infrastructure/interfaces/now-playins.use-case';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {type Movie} from '../../entities/movie.entity';

export const moviesUpComingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const tops = await fetcher.get<NowPlayingResponse>('upcoming');

    // const peliculas:
    // console.log({nowPlaying});

    if (tops.results) {
      return tops.results.map(MovieMapper.fromMovieDBToMovieToEntity);
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
