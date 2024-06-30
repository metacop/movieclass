import {Actor, FullMovie, Movie} from '../../core/entities/movie.entity';
import {APIDBActores} from '../interfaces/api-result-actores';
import {APIMovieResult} from '../interfaces/api-result-fullmovie';
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
  static fromMovieDBToMovieToEntityEspecific(result: APIMovieResult): FullMovie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      rating: result.vote_average,
      releaseDate: new Date(result.release_date),
      genres: result.genres.map(genre => genre.name),
      duration: result.runtime,
      budget: result.budget,
      originalTitle: result.original_title,
      productionCompanies: result.production_companies.map(company => company.name),
    };
  }
  static fromMovieDBToActorToEntity(result: APIDBActores): Actor[] {
    return result.cast.map(actor => ({
      id: actor.id,
      name: actor.name,
      profile_path: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg',
      character: actor.character ?? 'No tiene personaje',
    }));
  }
}
