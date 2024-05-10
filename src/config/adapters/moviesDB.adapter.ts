import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: 'c2c2e283f2953eadf65c7fa0ed1de191',
    language: 'es',
  },
});
