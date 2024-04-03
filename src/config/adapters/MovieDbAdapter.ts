import {AxiosAdapter} from './http/axiosAdapter';

export const movieDbFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'ebf72720536393f3475fd9fd87b655c7',
    language: 'es',
  },
});
