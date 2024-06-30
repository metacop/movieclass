import {AxiosAdapter} from './http/axios.adapter';
import {FetchAdapter} from './http/fetch.adapter';

//! NO IMPORTA DOTEND EN REACT NATIVE 0.74.1 NO FUNCIONA. HAY UN BUG FALTA SOLUCION.
// import {THE_MOVIE_DB_KEY} from '@env';

// ! aqui se crea una instancia de AxiosAdapter con la configuracion de la url base y los parametros que se van a enviar en cada peticion
export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: 'xx',
    language: 'es',
  },
});

//! aqui podemos crear fetching a api/o apis diferentes, con distintos adaptadores. podriamos usar adaptador fetchg o httpadapter para hacer peticiones a otras apis o otros adaptadores.

export const movieDBFetcherFetch = new FetchAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: 'xx',
    language: 'es',
  },
});
