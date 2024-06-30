import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {type NowPlayingResponse} from '../../../infrastructure/interfaces/now-playins.use-case';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {type Movie} from '../../entities/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    console.log({page: options?.page ?? 1});
    const popular = await fetcher.get<NowPlayingResponse>('popular', {
      params: {
        page: options?.page ?? 1,
      },
    });

    // const peliculas:
    // console.log({nowPlaying});

    if (popular.results) {
      return popular.results.map(MovieMapper.fromMovieDBToMovieToEntity);
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
