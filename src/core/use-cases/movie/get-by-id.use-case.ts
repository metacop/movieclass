import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {APIMovieResult} from '../../../infrastructure/interfaces/api-result-fullmovie';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {FullMovie} from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
  try {
    //FETCHING MOVIE BY ID
    const movie = await fetcher.get<APIMovieResult>(`${movieId}`);

    //MAPPING MOVIEAPIRESULT TO ENTITY (FULL MOVIE)
    return MovieMapper.fromMovieDBToMovieToEntityEspecific(movie);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movie by id');
  }
};
