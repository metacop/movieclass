import {Movie} from '../../core/entities/movie.entity';
import {Result} from '../interfaces/now-playins.use-case';

export class MovieMapper {
  static fromMovieDBToMovieToEntity(result: Result): Movie {
    //! qui podriamos poner codicciones en caso si alguna propiedad de result es undefined o controlarlo de alguna manera

    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      rating: result.vote_average,
      releaseDate: new Date(result.release_date),
    };
  }
}
