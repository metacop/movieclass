import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {APIDBActores} from '../../../infrastructure/interfaces/api-result-actores';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Actor} from '../../entities/movie.entity';

export const getActoresMovieIDUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Actor[]> => {
  try {
    const response = await fetcher.get<APIDBActores>(`${movieId}/credits`);

    const mappedActors = MovieMapper.fromMovieDBToActorToEntity(response);

    return mappedActors;
  } catch (error) {
    throw new Error('Error al obtener los actores de la pelicula');
  }
};
